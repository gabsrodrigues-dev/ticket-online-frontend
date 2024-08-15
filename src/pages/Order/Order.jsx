import ButtonComponent from "../../components/Button/ButtonComponent";
import StepsCounter from "../../components/StepsCounter/StepsCounter";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastifyElement } from "../../components/Toastify/ToastifyElement";
import StepItem from "../../components/StepItem/StepItem";
import QRCode from "react-qr-code";
import moment from "moment";
import html2canvas from "html2canvas";
import Loading from "../../components/Loading/Loading";

export default function Order() {
  const [checkoutObject, setCheckoutObject] = useState(null);
  const [orderStep, setOrderStep] = useState(1);
  const [screenshotTime, setScreenshotTime] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const checkoutId = useParams().checkoutId;

  const handleCopyQrCode = () => {
    navigator.clipboard.writeText(checkoutObject.checkout_pix_content);
    ToastifyElement("success", "Código QR copiado com sucesso!");
  };

  const fetchCheckout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://sandbox-api-ir.gabsrodrigues.com.br/api/sales/getOrderContent?finance_identifier=${checkoutId}`
      );
      setCheckoutObject(response.data.data);
      if (response.data.data.checkout_status === "pending") setOrderStep(1);
      if (response.data.data.checkout_status === "ready") setOrderStep(2);
      if (response.data.data.checkout_status === "completed") setOrderStep(3);
      if (response.data.data.checkout_status === "refunded") setOrderStep(4);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching checkout:", error);
      setIsLoading(false);
      return ToastifyElement("error", "Ocorreu um erro ao buscar o pedido.");
    }
  };

  useEffect(() => {
    fetchCheckout();
  }, []);

  useEffect(() => {
    if (
      checkoutObject &&
      checkoutObject.checkout_status === "pending" &&
      window.location.hostname !== "localhost"
    ) {
      const interval = setInterval(() => {
        fetchCheckout();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [checkoutObject]);

  const openWhatsappConfirmation = () => {
    const phoneNumber = "5531991647507";
    const baseUrl = "https://api.whatsapp.com/send/?phone=";
    window.open(`${baseUrl}${phoneNumber}`, "_blank");
  };

  const downloadImage = () => {
    setScreenshotTime(true);
    setTimeout(() => setScreenshotTime(false), 300);
    setTimeout(() => {
      const ticketElement = document.getElementById("screenshotArea");
      if (ticketElement) {
        html2canvas(ticketElement)
          .then((canvas) => {
            const screenshotURL = canvas.toDataURL("image/png");
            const isIphone = /iphone/i.test(navigator.userAgent);
            if (isIphone) {
              const newWindow = window.open();
              if (newWindow) {
                ToastifyElement("success", "Tentamos salvar a imagem.");
                newWindow.document.write('<img src="' + screenshotURL + '" />');
              } else {
                ToastifyElement(
                  "success",
                  "IOS não é compatível com este recurso. Por favor, capture a tela manualmente."
                );
                const link = document.createElement("a");
                link.href = screenshotURL;
                link.download = `ticket-${checkoutObject.checkout_payer
                  .toLocaleLowerCase()
                  .replaceAll(" ", "-")}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                ToastifyElement("success", "Seu ticket foi salvo!");
              }
            } else {
              const link = document.createElement("a");
              link.href = screenshotURL;
              link.download = `ticket-${checkoutObject.checkout_payer
                .toLocaleLowerCase()
                .replaceAll(" ", "-")}.png`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              ToastifyElement("success", "Sua foto foi salva!");
            }
          })
          .catch((error) => {
            ToastifyElement(
              "error",
              "Não foi salvar a imagem! Você ainda pode tirar uma print' da tela."
            );
            console.error(error);
          });
      }
    }, 100);
  };

  return (
    <main className="first-mobile-align bg-[#EEEEEE]">
      <Loading isLoading={isLoading} />
      <main className="second-mobile-align flex flex-col h-full justify-between gap-6">
        <section className="flex flex-col h-full gap-10">
          <Header />
          <section className="flex flex-col h-full gap-6">
            <section className="flex flex-col h-full gap-6 bg-white rounded-xl p-4">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-bold">Acompanhe seu pedido</span>
                <div className="flex items-center justify-center">
                  {orderStep !== 4 ? (
                    <>
                      <StepItem
                        labelMarginLeft="-16px"
                        step={1}
                        currentStep={orderStep}
                        icon="dollar-circle"
                        label="Pagamento"
                      />
                      <StepItem
                        step={2}
                        currentStep={orderStep}
                        icon="shop"
                        label="Retirar"
                      />
                      <StepItem
                        labelMarginLeft="-8px"
                        step={3}
                        currentStep={orderStep}
                        icon="tick-circle"
                        label="Finalizado"
                      />
                    </>
                  ) : (
                    <StepItem
                      labelMarginLeft="-28px"
                      step={4}
                      currentStep={orderStep}
                      icon="tick-circle"
                      label="Reembolsado"
                    />
                  )}
                </div>
              </div>
            </section>
            {checkoutObject && checkoutObject !== null && (
              <section className="flex flex-col h-full gap-6 bg-white rounded-xl p-4">
                <div className="flex flex-col gap-3">
                  <span className="text-2xl font-bold">Meu pedido</span>
                  <div className="flex items-center gap-3">
                    <div className="flex w-7 h-7 rounded-lg items-center justify-center border border-[#D9D9D9]">
                      <span className="font-bold">
                        {checkoutObject.checkout_product_quantity}
                      </span>
                    </div>
                    <div className="w-9 h-9">
                      <img
                        src="/images/temp/actual_product.webp"
                        className="w-9 h-9 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-black">
                        {checkoutObject.checkout_product_name}
                      </span>
                      <span className="text-lg font-semibold text-[#494C61] leading-none">
                        <span className="text-xs text-[#494C61]">R$ </span>
                        {checkoutObject.checkout_price},00
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {checkoutObject &&
              checkoutObject !== null &&
              checkoutObject.checkout_status === "pending" && (
                <section className="flex flex-col h-full gap-6 bg-white rounded-xl p-4">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex items-center p-3 justify-center border border-[#D9D9D9] rounded-2xl max-h-[150px] max-w-[150px]">
                      <QRCode value={checkoutObject.checkout_pix_content} />
                    </div>
                    <span className="text-2xl font-bold">
                      Seu código PIX foi gerado.
                    </span>
                    <div className="w-[60%]">
                      <ButtonComponent
                        roundedFull
                        leftIcon="/images/checkout/copy.svg"
                        text="Copiar código"
                        textColor="#fff"
                        backgroundColor="#6D9773"
                        onClick={handleCopyQrCode}
                      />
                    </div>
                    <div className="flex flex-col w-full pt-3 gap-1">
                      <div>
                        <p className="text-sm text-black font-normal">
                          Efetue o pagamento até
                        </p>
                        <p className="text-sm text-black leading-none">
                          {moment(checkoutObject.checkout_limit_time).format(
                            `DD/MM/YYYY [-] HH:mm`
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-black font-normal">
                          Pagamento para
                        </p>
                        <p className="text-sm text-black leading-none">
                          Gabriel Rodrigues Torres - ***.307.606-**
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-black font-normal">
                          Instituição financeira
                        </p>
                        <p className="text-sm text-black leading-none">
                          MERCADO PAGO IP LTDA.
                        </p>
                      </div>
                    </div>
                    <div className="py-3 w-full">
                      <ButtonComponent
                        text="Atualizar status"
                        textColor="#fff"
                        backgroundColor="#6D9773"
                        onClick={fetchCheckout}
                      />
                    </div>
                  </div>

                  <StepsCounter
                    actualStep={4}
                    totalSteps={5}
                    stepsBackground={"#D9D9D9"}
                    conclusedStepsBackground={"#7CBA3D"}
                  />
                </section>
              )}
            {checkoutObject &&
              checkoutObject !== null &&
              checkoutObject.checkout_status !== "pending" &&
              orderStep !== 4 && (
                <section className="flex flex-col h-full gap-6 bg-white rounded-xl p-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex relative">
                      {screenshotTime && (
                        <div className="flex w-full h-full justify-center items-center absolute z-20 rounded-2xl bg-white">
                          <img
                            src="/images/loading/loading.svg"
                            alt="Carregando..."
                          />
                        </div>
                      )}
                      <div
                        className={`flex flex-col gap-3 relative w-full ${
                          screenshotTime && "px-2 mb-5"
                        }`}
                        id="screenshotArea">
                        {checkoutObject.checkout_status !== "completed" && (
                          <img
                            alt="Logo da Igreja"
                            src="/images/logos/white-logo.png"
                            className="absolute -top-5 left-0 w-full h-auto opacity-25 select-none pointer-events-none"
                          />
                        )}
                        <span className="text-2xl font-bold z-10">
                          Meu ticket
                        </span>
                        <p className="text-sm text-black leading-none z-10">
                          {checkoutObject.checkout_status === "completed"
                            ? "Seu pedido já foi retirado!"
                            : "Seu pedido já está pronto!"}
                        </p>
                        {checkoutObject.checkout_status !== "completed" && (
                          <>
                            <p className="text-sm text-black leading-none z-10">
                              Agora basta apresentar seu código no caixa para
                              retirar seu pedido
                            </p>
                            <p className="text-xs text-black leading-none">
                              Aviso:{" "}
                              <span className="font-normal text-black z-10">
                                <i>
                                  Por favor, evite compartilhar seus ticktes com
                                  outras pessoas!
                                </i>
                              </span>
                            </p>
                          </>
                        )}
                        <div className="py-6 flex items-center justify-center">
                          <div
                            className={`flex justify-center items-center text-center max-w-[70%] w-fit px-6 p-4 bg-[#D8EBDB] rounded-lg ${
                              !screenshotTime && "z-10"
                            }`}>
                            <span
                              className={`text-[#39623F] text-xl ${
                                screenshotTime && "-mt-5"
                              }`}>
                              ST-
                              {checkoutObject.ticket_content.ticket_numbers.join(
                                `, ST-`
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ButtonComponent
                      text="Abrir no Whatsapp"
                      textColor="#6D9773"
                      borderColor="#6D9773"
                      backgroundColor="#FFF"
                      onClick={openWhatsappConfirmation}
                    />
                    <ButtonComponent
                      text="Baixar Imagem"
                      textColor="#6D9773"
                      borderColor="#6D9773"
                      backgroundColor="#FFF"
                      onClick={downloadImage}
                    />
                  </div>
                  <StepsCounter
                    actualStep={orderStep === 1 ? 4 : 5}
                    totalSteps={5}
                    stepsBackground={"#D9D9D9"}
                    conclusedStepsBackground={"#7CBA3D"}
                  />
                </section>
              )}
          </section>
        </section>
        <div></div>
      </main>
    </main>
  );
}

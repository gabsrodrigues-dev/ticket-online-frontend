import ButtonComponent from "../../components/Button/ButtonComponent";
import StepsCounter from "../../components/StepsCounter/StepsCounter";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastifyElement } from "../../components/Toastify/ToastifyElement";
import StepItem from "../../components/StepItem/StepItem";
import QRCode from "react-qr-code";

export default function Order() {
  const [checkoutObject, setCheckoutObject] = useState(null);
  const checkoutId = useParams().checkoutId;
  const [orderStep, setOrderStep] = useState(1);

  const handleCopyQrCode = () => {
    navigator.clipboard.writeText(checkoutObject.checkout_pix_content);
    ToastifyElement("success", "Código QR copiado com sucesso!");
  };
  
  useEffect(() => {
    const fetchCheckout = async () => {
      try {
        const response = await axios.get(
          `https://api-ir.gabsrodrigues.com.br/api/sales/getOrderContent?finance_identifier=${checkoutId}`
        );
        console.log(`datoajoadsaoi`, response.data.data);
        setCheckoutObject(response.data.data);
        if (response.data.data.checkout_status === "pending") setOrderStep(1);
        if (response.data.data.checkout_status === "paid") setOrderStep(2);
        if (response.data.data.checkout_status === "completed") setOrderStep(3);
      } catch (error) {
        console.error("Error fetching checkout:", error);
        return ToastifyElement("error", "Ocorreu um erro ao buscar o pedido.");
      }
    };
    fetchCheckout();
  }, []);

  return (
    <main className="first-mobile-align bg-[#EEEEEE]">
      <main className="second-mobile-align flex flex-col h-full justify-between gap-6">
        <section className="flex flex-col h-full gap-10">
          <Header />
          <section className="flex flex-col h-full gap-6">
            <section className="flex flex-col h-full gap-6 bg-white rounded-xl p-4">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-bold">Acompanhe seu pedido</span>
                <div className="flex items-center justify-center">
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
                      <span className="text-sm font-bold text-[#0B0C17]">
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
                  <span className="text-2xl font-bold">Seu código PIX foi gerado.</span>
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
              checkoutObject.checkout_status !== "pending" && (
                <section className="flex flex-col h-full gap-6 bg-white rounded-xl p-4">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-bold">Meu ticket</span>
                  </div>
                  <StepsCounter
                    actualStep={4}
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

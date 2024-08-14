import ButtonComponent from "../../components/Button/ButtonComponent";
import StepsCounter from "../../components/StepsCounter/StepsCounter";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { EncryptedLocalStorage } from "../../services/localStorage/localStorage.service";
import { ToastifyElement } from "../../components/Toastify/ToastifyElement";

export default function ProductsPurchase() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const productAlias = useParams().productAlias;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api-ir.gabsrodrigues.com.br/api/canteen/getUniqueProduct?slug=${productAlias}`
        );

        setSelectedProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
       return ToastifyElement("error", "Ocorreu um erro ao buscar o produto.");
      }
    };
    fetchProduct();
  }, []);

  const confirmOrder = async () => {
    try {
    await EncryptedLocalStorage.put("order",{
      product: selectedProduct,
      quantity: quantity
    });
    const basicInfos = await EncryptedLocalStorage.get("basicInfos");
    const payload = {
      name: basicInfos.name,
      phone: basicInfos.phone,
      cpf: "02330760698",
      email: "grtmb@hotmail.com",
      product_alias: productAlias,
      quantity,
    };
    const response = await axios.post("https://api-ir.gabsrodrigues.com.br/api/sales/createFinance",payload)
    if (response.data.id) {
      window.location.href = `/order/payment/${response.data.id}`;
    } else {
      return ToastifyElement("error", "Ocorreu um erro ao criar o pedido.");
    }
  } catch (error) {
    console.error("Error confirming order:", error);
   return ToastifyElement("error", "Ocorreu um erro ao confirmar o pedido.");
  }
  };

  return (
    <main className="first-mobile-align bg-[#EEEEEE]">
      <main className="second-mobile-align flex flex-col h-full justify-between gap-6">
        <section className="flex flex-col h-full gap-10">
          <Header />
          {selectedProduct && selectedProduct !== null && (
            <section className="flex flex-col h-full gap-6 bg-white rounded-xl p-4">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-bold">
                  {selectedProduct.product_title}
                </span>
                <span className="text-md leading-tight">
                  {selectedProduct.product_complete_description}
                </span>
                <img
                  src={selectedProduct.image_src}
                  alt="Product Image"
                  className="rounded-xl object-cover aspect-square m-2"
                />
                <div className="flex w-full justify-center">
                  <span className="text-2xl font-bold py-3">
                    R${" "}
                    <span className="text-[42px]">
                      {selectedProduct.product_price*quantity}
                    </span>
                    ,00
                  </span>
                </div>
                <div className="flex w-full justify-center">
                  <div className="flex w-fit bg-[#F2F2F2] justify-center items-center rounded-full p-3 gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex bg-[#6D9773] items-center justify-center text-center font-bold w-9 h-9 text-2xl rounded-full">
                      <span className="mb-[2px] text-white">-</span>
                    </button>
                    <div className="flex bg-[#D9D9D9] items-center justify-center text-center font-bold w-12 h-12 text-3xl rounded-full">
                      <span className="">{quantity}</span>
                    </div>
                    <button
                      onClick={() => setQuantity(Math.min(15, quantity + 1))}
                      className="flex bg-[#6D9773] items-center justify-center text-center font-bold w-9 h-9 text-2xl rounded-full">
                      <span className="mb-[2px] text-white">+</span>
                    </button>
                  </div>
                </div>
                <div className="pt-6">
                  <ButtonComponent
                    text="Confirmar Pedido"
                    textColor="#fff"
                    backgroundColor="#6D9773"
                    onClick={confirmOrder}
                  />
                </div>
              </div>
              <StepsCounter
                actualStep={3}
                totalSteps={5}
                stepsBackground={"#D9D9D9"}
                conclusedStepsBackground={"#7CBA3D"}
              />
            </section>
          )}
        </section>
        <div></div>
      </main>
    </main>
  );
}

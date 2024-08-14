import ButtonComponent from "../../components/Button/ButtonComponent";
import StepsCounter from "../../components/StepsCounter/StepsCounter";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastifyElement } from "../../components/Toastify/ToastifyElement";

export default function Order() {
  const [checkoutObject, setCheckoutObject] = useState(null);
  const checkoutId = useParams().checkoutId;

  useEffect(() => {
    const fetchCheckout = async () => {
      try {
        const response = await axios.get(
          `https://api-ir.gabsrodrigues.com.br/api/sales/getOrderContent?finance_identifier=${checkoutId}`
        );
        console.log(`datoajoadsaoi`, response.data.data);
        setCheckoutObject(response.data.data);
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
              </div>
            </section>
            <section className="flex flex-col h-full gap-6 bg-white rounded-xl p-4">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-bold">Meu pedido</span>
              </div>
            </section>
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
          </section>
        </section>
        <div></div>
      </main>
    </main>
  );
}

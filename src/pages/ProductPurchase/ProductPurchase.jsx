import ButtonComponent from "../../components/Button/ButtonComponent";
import StepsCounter from "../../components/StepsCounter/StepsCounter";

export default function ProductsPurchase() {
  const finishOrder = () => {
    window.location.href = "/basicInfos";
  };

  const back = () => {
    window.location.href = "/products";
  };

  return (
    <main className="first-mobile-align bg-[#6D9773]">
      <main className="second-mobile-align flex flex-col h-full justify-between gap-6 text-white bg-[#fff]">
        <section className="flex flex-col gap-6">
          <span className="text-2xl font-bold">Dogão dos Jovens</span>
          <span className="text-base font-medium text-[#6D9773]">Este produto contém um cachorro quente e um refrigerante (Guaraná Antarctica ou Coca-Cola) 150ml. Será entregue ao final do culto de domingo.</span>
          
          <div className="bg-gray-200 min-h-48 min-w-40 rounded-2xl"></div>
          
        </section>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
              <ButtonComponent
                  text="Finalizar pedido"
                  textColor="#fff"
                  backgroundColor="#6D9773"
                  onClick={finishOrder}
              />
              <ButtonComponent
                  text="Voltar"
                  textColor="#6D9773"
                  borderColor="#6D9773"
                  backgroundColor="#FFF"
                  onClick={back}
              />
          </div>
          <StepsCounter actualStep={3} totalSteps={5} stepsBackground={'#D9D9D9'} conclusedStepsBackground={'#7CBA3D'} />
        </div>
      </main>
    </main>
  );
}

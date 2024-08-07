import ButtonComponent from "../../components/Button/ButtonComponent";
import StepsCounter from "../../components/StepsCounter/StepsCounter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";

export default function Products() {
  return (
    <main className="first-mobile-align bg-[#6D9773]">
      <main className="second-mobile-align flex flex-col h-full justify-between gap-6 bg-[#EEEEEE]">
        <section className="flex flex-col h-full gap-12">
          <Header />
          <section className="flex flex-col h-full gap-6 bg-white rounded-2xl p-4">
            <div className="flex flex-col">
            <span className="text-2xl font-bold">Cardápio do dia</span>
            <span className="text-md">
              Escolha entre as opções disponíveis.
            </span>
            </div>
            <ProductCard
              title="Dogão dos Jovens"
              redirect="/order/start/dogo-dos-jovens"
              description="Cachorro-quente com refrigerante"
              price="0,00"
            />
          </section>
        </section>
        <div>
          <StepsCounter
            actualStep={3}
            totalSteps={5}
            stepsBackground={"#D9D9D9"}
            conclusedStepsBackground={"#7CBA3D"}
          />
        </div>
      </main>
    </main>
  );
}

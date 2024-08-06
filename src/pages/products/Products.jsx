import ButtonComponent from "../../components/Button/ButtonComponent";
import StepsCounter from "../../components/StepsCounter/StepsCounter";
import ProductCard from "../../components/ProductCard/ProductCard"

export default function Products() {
  const nextStep = () => {
    window.location.href = "/basicInfos";
  };
  return (
    <main className="first-mobile-align bg-[#6D9773]">
      <main className="second-mobile-align flex flex-col h-full justify-between gap-6 text-white bg-[#fff]">
        <section className="flex flex-col gap-6">
          <span className="text-2xl font-bold">Cardápio do dia</span>
          <span className="text-base font-medium">Antes de fazer o seu pedido, precisamos que você nos informe alguns dados</span>
          <ProductCard 
            title = "Dogão dos Jovens"
            description = "Cachorro-quente com refrigerante"
            price = "0,00"
          />
        </section>
        <div>
        <StepsCounter actualStep={3} totalSteps={5} stepsBackground={'#D9D9D9'} conclusedStepsBackground={'#7CBA3D'} />
        </div>
      </main>
    </main>
  );
}

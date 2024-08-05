import ButtonComponent from "../../components/button/button";
import StepsCounter from "../../components/stepsCounter/stepsCounter";

export default function Home() {
  const nextStep = () => {
    window.location.href = "/informationsBasics";
  };
  return (
    <main className="first-mobile-align">
      <main className="second-mobile-align flex flex-col justify-between gap-6 h-full text-white bg-[#6D9773]">
        <div className="flex min-h-[50vh] w-full justify-center items-center">
          <img src="/images/logos/colored-logo.png" className="max-w-[150px]" />
        </div>
        <div className="flex flex-col w-full gap-24">
          <div className="flex flex-col w-full gap-3">
            <h1>Olá, tudo bem?</h1>
            <p>
              Estamos empolgados por você participar e apoiar as causas da
              igreja.
            </p>
            <p>
              Adquira o seu lanche agora mesmo!
            </p>
          </div>
          <div className="flex flex-col w-full gap-6">
          <ButtonComponent
            text="Começar"
            textColor="#6D9773"
            backgroundColor="#FFF"
            onClick={nextStep}
          />
          <StepsCounter actualStep={1} totalSteps={5} stepsBackground={'#f00'} conclusedStepsBackground={'#0ff'} />
        </div>
        </div>
      </main>
    </main>
  );
}

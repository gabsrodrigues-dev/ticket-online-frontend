import ButtonComponent from "../../components/Button/ButtonComponent";
import StepsCounter from "../../components/StepsCounter/StepsCounter";

export default function Home() {
  const nextStep = () => {
    window.location.href = "/basicInfos";
  };
  return (
    <main className="first-mobile-align bg-[#6D9773]">
      <main className="second-mobile-align flex flex-col h-full justify-between gap-6 text-white bg-[#6D9773]">
        <div className="flex w-full h-full justify-center items-center min-h-[30vh]">
          <img src="/images/logos/colored-logo.png" className="max-w-[150px]" />
        </div>
        <div className="flex flex-col w-full h-fit gap-12">
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
          <div className="flex flex-col w-full gap-10">
          <ButtonComponent
            text="Começar"
            textColor="#6D9773"
            backgroundColor="#FFF"
            onClick={nextStep}
          />
          <StepsCounter actualStep={1} totalSteps={5} stepsBackground={'#D9D9D9'} conclusedStepsBackground={'#7CBA3D'} />
        </div>
        </div>
      </main>
    </main>
  );
}

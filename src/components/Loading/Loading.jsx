export default function Loading({ isLoading }) {
  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 flex flex-col gap-6 justify-center items-center w-full h-full max-h-screen bg-white/40 backdrop-blur-lg z-[1000]">
        <img src="/images/logos/colored-logo.png" alt="Carregando..." className="w-[8rem]" />
        <img src="/images/loading/loading.svg" alt="Carregando..." className="w-[6rem]" />
      </div>
    );
  } else {
    return;
  }
}

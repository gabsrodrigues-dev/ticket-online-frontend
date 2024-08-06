export default function StepsCounter({
  actualStep,
  totalSteps,
  stepsBackground,
  conclusedStepsBackground
}) {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full`}
          style={{
            backgroundColor:
              index < actualStep ? conclusedStepsBackground : stepsBackground
          }}
        />
      ))}
    </div>
  );
}

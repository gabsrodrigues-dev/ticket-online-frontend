export default function StepItem ({ labelMarginLeft, step, currentStep, icon, label }) {
    const isActive = currentStep === step;
    const isPassed = currentStep > step;
    const isDisabled = currentStep < step;
  
    return (
      <div className="flex items-center">
        <div className={`flex justify-center items-center w-12 h-12 rounded-full ${isActive || isPassed ? "bg-[#6D9773]" : "bg-[#ECECEC]"} mb-8 relative`}>
          <span style={{ marginLeft: labelMarginLeft }} className={`absolute -bottom-6 w-full text-center text-xs ${isActive ? "text-black" : "text-[#D6D6D6]"}`}>
            {label}
          </span>
          <img
            src={`/images/checkout/${isActive ? "enabled" : isPassed ? "passed" : "disabled"}/${icon}.svg`}
            className="w-6 h-6"
          />
        </div>
        {step < 3 && (<>
          <div className={`w-8 h-[3px] mb-8 ${(isActive||isPassed) ? "bg-[#6D9773]" : "bg-[#ECECEC]"}`} />
          <div className={`w-8 h-[3px] mb-8 ${isPassed ? "bg-[#6D9773]" : "bg-[#ECECEC]"}`} />
          </>)}
      </div>
    );
  };
  
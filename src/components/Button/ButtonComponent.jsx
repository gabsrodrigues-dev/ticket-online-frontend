export default function ButtonComponent({
  text,
  onClick,
  className,
  type,
  id,
  backgroundColor,
  borderColor,
  textColor,
  roundedFull,
  leftIcon
}) {
  const styles = {
    backgroundColor: backgroundColor || "#6D9773",
    borderColor: borderColor || backgroundColor || "#6D9773",
    color: textColor || "#fff"
  };
  return (
    <button
      type={type || "button"}
      id={id || undefined}
      name={text}
      onClick={onClick}
      style={styles}
      className={`${className} ${roundedFull ? "rounded-full" : "rounded-xl"} flex justify-center items-center w-full p-4 py-3 text-sm font-bold border transition-all duration-300 hover:-translate-y-[2px]`}>
        {leftIcon && <img src={leftIcon} className="w-4 h-4 object-cover mr-2" />}
      {text}
    </button>
  );
}

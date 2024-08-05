export default function ButtonComponent({
  text,
  onClick,
  className,
  type,
  id,
  backgroundColor,
  borderColor,
  textColor
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
      className={`${className} w-full rounded-2xl p-4 text-md font-bold border transition-all duration-300 hover:-translate-y-[2px]`}>
      {text}
    </button>
  );
}

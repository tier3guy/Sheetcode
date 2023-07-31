import React from "react";

const Button = ({
  action = () => {},
  label = "Button",
  style,
  className,
  secondary,
}: {
  action?: React.MouseEventHandler<HTMLButtonElement>;
  label?: String;
  style?: React.CSSProperties;
  className?: String;
  secondary?: Boolean;
}) => {
  return (
    <button
      style={{ ...style }}
      className={`${
        secondary ? "bg-slate-600" : "bg-gray-800"
      } px-6 py-3 text-white ${className}`}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;

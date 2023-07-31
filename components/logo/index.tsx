import React from "react";

const Logo = ({
  style,
  className,
  label,
}: {
  style?: React.CSSProperties;
  className?: String;
  label?: String;
}) => {
  return (
    <p style={{ ...style }} className={`text-lg ${className}`}>
      {label ? label : "Sheetcode."}
    </p>
  );
};

export default Logo;

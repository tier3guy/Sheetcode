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
  if (label)
    return (
      <p style={style} className={`text-xl ${className}`}>
        {label}
      </p>
    );
  return (
    <p style={style} className={`text-xl ${className}`}>
      Sheetcode<span className="font-bold">.</span>
    </p>
  );
};

export default Logo;

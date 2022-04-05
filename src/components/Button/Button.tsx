import React from "react";
import "./Button.css";

type ButtonProps = {
  label?: String;
  styling?: Object;
  children?: JSX.Element;
}

const Button = ({ label, children, styling }: ButtonProps) => {
  
  const mystyle = {
    root: {
       color:"white"
    }
  };

  const updatedStyles = { ...mystyle.root, ...styling };

  return (
    <button className="embtn" style={updatedStyles}>
      {label}
      {children}
    </button>
  );

};

export default Button;

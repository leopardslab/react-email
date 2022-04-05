import React from "react";
import "./Email.css";

type Props = {
  text?: String;
  styling?: Object;
  children?: JSX.Element;
};

const Email = ({ text, children, styling }: Props) => {
  const mystyle = {
    root: {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    },
  };

  const updatedStyles = { ...mystyle.root, ...styling };

  return (
    <span style={updatedStyles}>
      {text}
      {children}
    </span>
  );

};

export default Email;

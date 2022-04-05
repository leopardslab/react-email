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
    <table style={updatedStyles}>
      <thead>
        <tr>
          <td>{text}</td>
        </tr>
      </thead>
    </table>
  );
};

export default Email;

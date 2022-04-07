import React from 'react';
import './Button.css';

type Props = {
  type: string;
  text: string;
  onClick: () => void;
};

const Button = (props: Props) => {
  const { type, text, onClick } = props;
  return (
    <button type="button" className={`Button Button-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

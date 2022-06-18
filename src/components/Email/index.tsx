import { FC, ReactNode } from 'react';

interface EmailPropType {
  children?: ReactNode;
}

export const Email: FC<EmailPropType> = (props) => {
  return <div>{props.children}</div>;
};

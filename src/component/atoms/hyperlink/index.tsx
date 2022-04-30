import React from 'react';

const defaultProps = {
  target: '_blank',
};

type Props = {
  children: string;
  href: string;
  download?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
} & typeof defaultProps;

const HyperLink = (props: Props) => {
  const { children, href, download, target } = props;
  return (
    <a href={href} download={download} target={target}>
      {children}
    </a>
  );
};

HyperLink.defaultProps = defaultProps;

export default HyperLink;

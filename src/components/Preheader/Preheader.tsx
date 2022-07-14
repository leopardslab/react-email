interface PreheaderProps {
  text: string;
}

export const Preheader = ({ text }: PreheaderProps) => {
  return (
    <div
      style={{
        display: 'none',
        fontSize: '1px',
        color: '#fff',
        lineHeight: '1px',
        maxHeight: 0,
        maxWidth: 0,
        opacity: 0,
        overflow: 'hidden',
      }}
    >
      {text}
    </div>
  );
};

export interface DividerProps {
  width?: string | number;
}

export const Divider = ({ width = '100%' }: DividerProps): JSX.Element => {
  return (
    <td
      align="center"
      style={{
        fontSize: '0',
        padding: '10px 20px',
        wordBreak: 'break-word',
      }}
    >
      <p
        style={{
          borderTop: 'solid 3px grey',
          margin: '0 auto',
          width: width,
        }}
      ></p>
    </td>
  );
};

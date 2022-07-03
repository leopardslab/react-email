export interface DividerProps {
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

export const Divider = ({ width = '100%', align = 'center' }: DividerProps): JSX.Element => {
  return (
    <tr>
      <td align={align}>
        <p
          style={{
            borderTop: 'solid 3px grey',
            marginTop: '0',
            marginBottom: '0',
            width: width,
          }}
        ></p>
      </td>
    </tr>
  );
};

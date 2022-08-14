import { CSSProperties } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import { BaseStyleProp } from '../types';

type ImageStyles =
  | 'root'
  | 'table'
  | 'body'
  | 'image'
  | 'caption'
  | 'imageSection'
  | 'captionSection'
  | 'imageColumn';

export interface ImageProps extends BaseStyleProp<ImageStyles> {
  src: string;
  alt: string;
  caption?: string;
  width: CSSProperties['width'];
  height?: CSSProperties['height'];
  captionAlign?: 'left' | 'center' | 'right';
}

const useStyles = makeStyles({
  root: { border: '0', display: 'block', outline: 'none' },
  table: { width: 'fit-content', border: '0', verticalAlign: 'top' },
  body: {},
  image: {},
  caption: {},
  imageSection: {},
  captionSection: {},
  imageColumn: {},
});

export const Image = ({
  src,
  alt,
  caption,
  width,
  height = 'auto',
  classes,
  className,
  captionAlign = 'center',
}: ImageProps): JSX.Element => {
  const styles = useStyles({ classes });

  return caption ? (
    <table cellPadding="0" cellSpacing="0" role="presentation" style={styles.table}>
      <tbody style={styles.body}>
        <tr style={styles.imageSection}>
          <td style={styles.imageColumn}>
            <img
              className={className}
              height={height}
              width={width}
              src={src}
              alt={alt}
              style={sx(styles.root, styles.image)}
            />
          </td>
        </tr>
        <tr style={styles.captionSection}>
          <td style={sx(styles.caption, { textAlign: captionAlign })} id="imageCaption">
            {caption}
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <img
      className={className}
      height={height}
      width={width}
      src={src}
      alt={alt}
      style={sx(styles.root, styles.image)}
    />
  );
};

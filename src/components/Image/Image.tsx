import { CSSProperties } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import type { BaseStyleProp } from '../types';
import { useTheme } from '../ThemeProvider';

export type ImageStyles =
  | 'root'
  | 'table'
  | 'body'
  | 'image'
  | 'caption'
  | 'imageSection'
  | 'captionSection'
  | 'imageColumn';

/**
 * Interface for PropTypes for the `Image` component.
 */
export interface ImageProps extends BaseStyleProp<ImageStyles> {
  /**
   * The URL or filepath of the image.
   */
  src: string;
  /**
   * The alt text for the image.
   */
  alt: string;
  /**
   * The caption for the image.
   */
  caption?: string;
  /**
   * The width of the image.
   */
  width: CSSProperties['width'];
  /**
   * The height of the image.
   * @default 'auto'
   */
  height?: CSSProperties['height'];
  /**
   * The alignment of the caption.
   * @default 'center'
   */
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
  const themeClasses = useTheme('image');
  const styles = useStyles({ classes }, themeClasses);

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

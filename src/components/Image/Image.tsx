import { CSSProperties } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';

type LinkStyles = 'root' | 'image' | 'caption';

export interface ImageProps extends BaseStyleProp<LinkStyles> {
  src: string;
  alt: string;
  caption?: string;
  width: CSSProperties['width'];
  height?: CSSProperties['height'];
}

const useStyles = makeStyles({
  root: { border: '0', display: 'block', outline: 'none' },
  image: {},
  caption: {},
});

export const Image = ({
  src,
  alt,
  caption,
  width,
  height = 'auto',
  classes,
  className,
}: ImageProps): JSX.Element => {
  const styles = useStyles({ classes });

  return caption ? (
    <table>
      <tr>
        <td>
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
      <tr>
        <td style={styles.caption}>{caption}</td>
      </tr>
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

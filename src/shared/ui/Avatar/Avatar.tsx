import styles from './Avatar.module.css'
import { Image } from '../Image/Image.tsx';


interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    src,
    alt = 'image',
  } = props;

  return (
    <Image
      src={src}
      alt={alt}
      className={styles.Avatar}
    />
  );
};

import styles from './Avatar.module.css'
import { Image } from '../Image/Image.tsx';
import cn from 'classnames';


interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: string
}

export const Avatar = (props: AvatarProps) => {
  const {
    src,
    alt = 'image',
    className,
    size
  } = props;

  return (
    <Image
      src={src}
      alt={alt}
      className={cn(styles.Avatar, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
      })}
    />
  );
};

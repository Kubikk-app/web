import {ImgHTMLAttributes} from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Image = (props: ImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    ...otherProps
  } = props;

  return (
    <img className={className} src={src} alt={alt}  {...otherProps}/>
  );
};

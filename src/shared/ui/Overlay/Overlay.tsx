import styles from './Overlay.module.css';


interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = (props: OverlayProps) => {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className={styles.Overlay}
    />
  );
};

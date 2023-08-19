import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from '@/shared/ui';
import styles from './Modal.module.css';
import cn from 'classnames';
import { Overlay } from '@/shared/ui/Overlay/Overlay.tsx';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={cn(styles.Modal, {
        [styles.opened]: isOpen,
        [styles.closed]: isClosing,
      })}>
        <Overlay className={styles.overlay} onClick={closeHandler} />
        <div className={styles.content} onClick={onContentClick}>{children}</div>
      </div>
    </Portal>
  );
};

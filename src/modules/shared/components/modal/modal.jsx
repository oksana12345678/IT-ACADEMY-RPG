// Modal.js
'use client';
import clsx from 'clsx';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, onClose, children, className }) {
  const dialogRef = useRef(null);

  const modalRoot = useMemo(
    () =>
      typeof document !== 'undefined' ? document.getElementById('modal') : null,
    []
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !modalRoot) return;

    if (open) {
      requestAnimationFrame(() => {
        if (dialog.isConnected) {
          dialog.showModal();
        }
      });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (dialog.open) {
        dialog.close();
        document.body.style.overflow = '';
      }
    };
  }, [open, modalRoot]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === dialogRef.current) onClose();
    },
    [onClose]
  );

  const handleStopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!open || !modalRoot) return null;

  return createPortal(
    <dialog
      className="xl:w-[1024px] h-[600px] md:w-[620px] fixed top-[50%] left-[50%] bg-[#090116] bg-opacity-50 z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-b-md"
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
    >
      <div
        className={clsx('text-[#FFF5E5]', className)}
        onClick={handleStopPropagation}
      >
        {children}
      </div>
    </dialog>,
    modalRoot
  );
}

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

  const handleStopPropagation = useCallback((e) => e.stopPropagation(), []);

  if (!open || !modalRoot) return null;

  return createPortal(
    <dialog
      className="shadow-lg shadow-[#7C01F8] xl:w-[1272px] xl:h-[600px] h-[778px] md:w-[680px] w-[334px] fixed top-0 left-[50%] xl:top-1/2 bg-[#090116] bg-opacity-50 z-50 transform xl:-translate-y-1/2  -translate-x-1/2  rounded-b-md"
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
    >
      <div
        className={clsx('text-[#FFF5E5] flex flex-col items-end', className)}
        onClick={handleStopPropagation}
      >
        <button
          className="block text-white focus:outline-none mt-6 mr-6 w-6 h-6"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              'w-8 h-8 transition-transform duration-300 rotate-45 transform'
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={'translate-y-2  -rotate-4'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16"
            />
            <path
              className={'translate-y-6 -rotate-86'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16"
            />
          </svg>{' '}
        </button>
        {children}
      </div>
    </dialog>,
    modalRoot
  );
}

import React, { useEffect, useRef } from "react";

// has css in index.css

const Modal = ({
  open,
  children,
  classNames,
}: {
  open: boolean;
  children: React.ReactNode;
  classNames?: string;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [open]);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      //   setShowModal(true);
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      //   setShowModal(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={`rewrewrewr-modal ${classNames}`}
      id="mainmodal"
    >
      {children}
    </dialog>
  );
};

export default Modal;

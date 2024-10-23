import classes from "./modal.module.css";
import {
  ComponentPropsWithoutRef,
  useEffect,
  // useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";
// import { forwardRef } from "react";

type ModalProps = ComponentPropsWithoutRef<"dialog">;

// export type ModalExposedRef = {
//   close: () => void;
//   show: () => void;
// };

const Modal = function (props: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialogRef.current!;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  // useImperativeHandle(ref, () => {
  //   const modal = dialogRef.current!;

  //   return {
  //     close: () => {
  //       modal.close();
  //     },

  //     show: () => {
  //       modal.showModal();
  //     },
  //   };
  // });

  return createPortal(
    <dialog
      ref={dialogRef}
      {...props}
      className={`${classes.modal} ${props.className ?? ""}`}
    >
      {props.children}
    </dialog>,
    document.getElementById("modal-root")!
  );
};

export default Modal;



// .modal {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background: var(--gradient);
//     border-radius: 0.5rem;
//     z-index: 2;
//     border: none;
//     box-shadow: var(--shadow);
//   }
  
//   .modal::backdrop {
//     background-color: black;
//     opacity: 0.5;
//   }
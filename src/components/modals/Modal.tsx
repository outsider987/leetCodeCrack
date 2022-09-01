import React from 'react';
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  toggle: boolean;
  backdrop?: void;
}
const Modal: React.FC<ModalProps> = (props) => {
  if (props.toggle) {
    return (
      <div
        {...props}
        className={`absolute inset-0  ${props.toggle ? 'fadeIn ' : 'fadeOut '}
        bottom-0 top-0 right-0 left-0
        z-50
        flex
        h-full
        overflow-hidden
        bg-gray-800
        bg-opacity-50 transition-all delay-150 ease-in-out`}
      >
        {props.children}
      </div>
    );
  } else {
    return <></>;
  }
};
export default Modal;

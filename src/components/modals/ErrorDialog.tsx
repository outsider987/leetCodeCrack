import React from 'react';
import Modal from './Modal';
import { ModalProps } from './Modal';

interface Props extends ModalProps {
  msg?: string;
  children?: React.ReactNode;
}
const ErrorDialog = (props: Props) => {
  return (
    <Modal {...props}>
      <div className="m-auto h-[50vh] w-[50vw] rounded-xl bg-white shadow-2xl">
        {props.msg}
      </div>
    </Modal>
  );
};
export default ErrorDialog;

import { createContext } from 'react';
import useModal from './use-modal';
import Modal from './modal';

let ModalContext;

const { Provider } = (ModalContext = createContext());

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal();

  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };

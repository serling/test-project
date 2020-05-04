import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/router';
import { ModalContext } from './modal-context';
import Button from 'components/button/button';

const MODAL_ROOT_ID = 'modal-root';

const Modal = () => {
  const router = useRouter();
  const { modalContent, handleModal, modal } = useContext(ModalContext);

  const handleOnRouteClick = (href) => {
    router.push(href).then(() => {
      handleModal(!modal);
    });
  };

  if (!modal) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal">
          <div className="modal__panel">
            <div className="modal__content">
              <div className="modal__header">
                <div className="modal__header-action">
                  <Button onClick={() => handleModal()} text="CLOSE" />
                </div>
              </div>
              <div className="modal__body">
                {/* <p>{modalContent}</p> */}
                <menu className="modal__navigation">
                  <li className="modal__navigation-item">
                    <button
                      className="modal__navigation-button"
                      onClick={() => handleOnRouteClick('/')}
                    >
                      <a>Home</a>
                    </button>
                  </li>
                  <li className="modal__navigation-item">
                    <button
                      className="modal__navigation-button"
                      onClick={() => handleOnRouteClick('/articles')}
                    >
                      <a>Articles</a>
                    </button>
                  </li>
                </menu>
              </div>
            </div>
          </div>
        </div>,
        document.querySelector(`#${MODAL_ROOT_ID}`)
      )}
      <style jsx global>{`
        .modal {
          background: rgba(0, 0, 0, 0.8);
          position: absolute;
          width: 100vw;
          height: 100vh;
          left: 0;
          top: 0;

          &__panel {
            background-color: #eaeaea;
            width: 100%;
            height: 100%;
          }

          &__header {
            position: relative;
          }

          &__header-action {
            margin-top: 1rem;
            position: absolute;
            right: 0;
          }

          &__body {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
          }

          &__content {
            max-width: 980px;
            margin: 0 auto;
            height: 100%;
          }

          &__navigation {
            display: flex;
            margin-left: -1rem;
          }

          &__navigation-item {
            flex: 1 0 auto;
            margin-left: 1rem;
            border: 1px solid black;
            min-height: 400px;
          }

          &__navigation-button {
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: 1px solid transparent;
            cursor: pointer;

            &:hover,
            &:focus {
              border-color: black;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Modal;

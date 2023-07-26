import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const Backdrop = ({ onErrorClose }) => {
  return <div className={styles.backdrop} onClick={onErrorClose} />;
};

const ModalOverlay = ({ onErrorClose, title, message }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onErrorClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ onErrorClose, title, message }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onErrorClose={onErrorClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onErrorClose={onErrorClose}
          title={title}
          message={message}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};
export default ErrorModal;

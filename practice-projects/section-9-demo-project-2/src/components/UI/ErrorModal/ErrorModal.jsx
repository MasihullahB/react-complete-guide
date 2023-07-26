import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';
const ErrorModal = ({ onErrorClose, title, message }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onErrorClose} />
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
    </>
  );
};
export default ErrorModal;

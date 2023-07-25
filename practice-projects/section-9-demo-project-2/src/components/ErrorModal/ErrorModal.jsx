import styles from './ErrorModal.module.css';
const ErrorModal = ({ onErrorClose }) => {
  const closeHandler = () => {
    onErrorClose(false);
  };

  return (
    <div className={styles['modal-wrapper']}>
      <div className={styles['modal']}>
        <div className={styles.header}>Invalid input</div>
        <div className={styles.content}>
          Please enter a valid name and age (non-empty values).
        </div>
        <button className={styles.button} onClick={closeHandler}>
          Okay
        </button>
      </div>
    </div>
  );
};
export default ErrorModal;

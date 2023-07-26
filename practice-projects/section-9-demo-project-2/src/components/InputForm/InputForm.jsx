import { useState, useRef } from 'react';
import styles from './InputForm.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
const InputForm = ({ onUserAdded }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    onUserAdded({ username, age, id: Math.random().toString() });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorClose={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input type='number' id='age' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default InputForm;

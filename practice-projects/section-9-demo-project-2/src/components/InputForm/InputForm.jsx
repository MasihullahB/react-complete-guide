import { useState } from 'react';
import styles from './InputForm.module.css';
// import Card from '../Card/Card';
const InputForm = ({ onUserAdded, isError }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      username.trim().length === 0 ||
      (age.trim().length === 0 && parseInt(age) < 0)
    ) {
      isError(true);
      return;
    }
    onUserAdded({ username, age });
    setUsername('');
    setAge('');
  };

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    // <Card>
    <form className={styles.form}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        className={styles['form-control']}
        value={username}
        onChange={userNameChangeHandler}
      />
      <label htmlFor='age'>Age (Years)</label>
      <input
        type='number'
        id='age'
        className={styles['form-control']}
        value={age}
        onChange={ageChangeHandler}
      />
      <button type='submit' className={styles.button} onClick={submitHandler}>
        Add User
      </button>
    </form>
    // </Card>
  );
};
export default InputForm;

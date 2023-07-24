import { useState } from 'react';
import styles from './CalculationForm.module.css';

const initialState = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 6,
  duration: 10,
};

const CalculationForm = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialState);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            value={userInput['current-savings']}
            onChange={(event) =>
              inputChangeHandler('current-savings', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            value={userInput['yearly-contribution']}
            onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            value={userInput['expected-return']}
            onChange={(event) =>
              inputChangeHandler('expected-return', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={userInput['duration']}
            onChange={(event) =>
              inputChangeHandler('duration', event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type='reset'
          onClick={resetHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type='submit' className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default CalculationForm;

import { useState } from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = enteredName.trim().length > 0;
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setNameIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);

    if (!nameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setNameIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Please enter a valid name!</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

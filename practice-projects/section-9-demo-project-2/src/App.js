import { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import UserList from './components/UserList/UserList';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => prevUsers.concat(user));
  };

  return (
    <>
      <InputForm onUserAdded={addUserHandler} isError={setError} />
      {users.length > 0 && <UserList users={users} />}
      {error && <ErrorModal onErrorClose={setError} />}
    </>
  );
}

export default App;

import { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <>
      <InputForm onUserAdded={addUserHandler} />
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}

export default App;

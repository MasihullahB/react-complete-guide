import styles from './UserList.module.css';
const UserList = ({ users }) => {
  return (
    <div className={styles.userList}>
      {users.map(({ username, age }) => (
        <p className={styles.user} key={Math.random().toString()}>
          {username} ({age} years old)
        </p>
      ))}
    </div>
  );
};
export default UserList;

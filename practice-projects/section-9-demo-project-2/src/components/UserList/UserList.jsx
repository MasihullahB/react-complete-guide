import Card from '../UI/Card/Card';
import styles from './UserList.module.css';
const UserList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map(({ username, age, id }) => (
          <li key={id}>
            {username} ({age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;

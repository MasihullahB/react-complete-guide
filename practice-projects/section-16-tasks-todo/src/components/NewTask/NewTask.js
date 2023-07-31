import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;

const NewTask = (props) => {
  const { isLoading, error, sendHttpRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    const requestConfig = {
      url: FIREBASE_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText },
    };

    sendTaskRequest(requestConfig, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

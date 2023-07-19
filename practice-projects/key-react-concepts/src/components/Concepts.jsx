import Concept from './Concept';

const Concepts = ({ concepts }) => {
  return (
    <ul id='concepts'>
      {concepts.map(({ title, image, description }) => (
        <Concept
          key={title}
          title={title}
          image={image}
          description={description}
        />
      ))}
    </ul>
  );
};
export default Concepts;

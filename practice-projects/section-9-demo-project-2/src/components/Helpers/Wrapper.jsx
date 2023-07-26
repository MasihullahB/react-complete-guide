/**
 * A function that acts as a wrapper component and returns its children.
 *
 * @param {object} props - The props object containing the children to be rendered.
 * @returns {ReactNode} The children that are rendered by the wrapper component.
 */

const Wrapper = (props) => {
  return props.children;
};
export default Wrapper;

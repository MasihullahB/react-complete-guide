import { useContext } from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
const MealItem = ({ name, description, price, id }) => {
  const ctx = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id,
      name,
      price,
      amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;

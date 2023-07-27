import { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';
const HeaderCartButton = (props) => {
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const ctx = useContext(CartContext);

  const { items } = ctx;
  const cartItems = items.reduce((acc, item) => acc + item.amount, 0);

  const btnClasses = `${classes.button} ${
    isBtnHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};
export default HeaderCartButton;

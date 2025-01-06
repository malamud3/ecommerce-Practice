import { useContext } from 'react';
import UserProgressContext from '../../store/UserProgressContext';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import currencyFormatter from '../../util/formatting';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalAmount = cartCtx.items.reduce((totalPrice, item) => {
    totalPrice + item.price * item.quantity;
  }, 0);

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <p className="cart-total"> {currencyFormatter.format(totalAmount)}</p>
      <p className="model-actions">
        <Button textOnly>Close</Button>
        <Button>Order</Button>
      </p>
    </Modal>
  );
}

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeCart } from '../../store/cart';

function CartItem({ item }) {

  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  const removeItem = e => {
    e.preventDefault(); 

    const produceItem = item.id 

    dispatch(removeCart(produceItem))
  }

  const incItem = e => {
    e.preventDefault();
    setCount(item.count + 1);
  }

  const decItem = e => {
    e.preventDefault();

    setCount(item.count - 1);
  }

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);
  


  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button" onClick={incItem}
        >
          +
        </button>
        <button
          className="cart-item-button" onClick={decItem}
        >
          -
        </button>
        <button
          className="cart-item-button" onClick={removeItem}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
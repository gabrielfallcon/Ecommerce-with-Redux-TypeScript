import React from 'react';
import { useSelector } from 'react-redux';
import { iState } from '../store';
import { iCartItem } from '../store/modules/cart/types';


const Cart: React.FC = () => {
  const cart = useSelector<iState, iCartItem[]>(state => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <th>{item.product.title}</th>  
            <th>{item.product.price}</th>
            <th>{item.quantity}</th>
            <th>{(item.product.price * item.quantity).toFixed(2)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;
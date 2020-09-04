import React, { useCallback } from 'react';
import { iProduct } from '../store/modules/cart/types';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/action';


interface CatalogItemProps {
  product: iProduct;

}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong><br />
      <span>{product.price}</span> <br />

      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
          </button>
    </article>
  );
}

export default CatalogItem;
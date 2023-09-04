import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store/store';
import { setCartMenuState } from '../../redux/reducer/flowerReducer';
import styles from './CartIcon.module.scss';

function CartIcon(): React.ReactElement {
  const cart: number[] = useSelector((state: AppState) => state.flower.cart);
  const cartState: boolean = useSelector(
    (state: AppState) => state.flower.isCartMenuActive
  );
  const dispatch = useDispatch();

  const onCartClick = (): void => {
    dispatch(setCartMenuState(!cartState));
  };

  return (
    <div className={styles.cartIcon}>
      {cart.length > 0 && <p className={styles.cartCount}>{cart.length}</p>}
      <button className={styles.cart} type="button" onClick={onCartClick} />
    </div>
  );
}

export default CartIcon;

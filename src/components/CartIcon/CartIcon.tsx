import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store/store';
import { setCartMenuState } from '../../redux/reducer/flowerReducer';
import style from './CartIcon.module.scss';

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
    <div className={style.cartIcon}>
      {cart.length > 0 && <p className={style.cartCount}>{cart.length}</p>}
      <button className={style.cart} type="button" onClick={onCartClick} />
    </div>
  );
}

export default CartIcon;

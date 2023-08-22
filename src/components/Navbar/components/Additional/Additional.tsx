import React from 'react';
import style from './Additional.module.scss';
import { CartIcon } from '../../../CartIcon';

function Additional({ isMobile }: { isMobile: boolean }): React.ReactElement {
  const onPhoneClick = (): void => {
    window.location.href = 'tel:+375291136969';
  };

  return (
    <div className={style.additionalContainer}>
      {!isMobile && (
        <div className={style.contactPhone}>
          <button
            type="button"
            className={style.phone}
            onClick={onPhoneClick}
          />
          <a href="tel:+375291136969" className={style.phoneNumber}>
            +375 (29) 113-69-69
          </a>
        </div>
      )}

      <CartIcon />
    </div>
  );
}

export default Additional;

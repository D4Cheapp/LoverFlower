import React from 'react';
import styles from './Additional.module.scss';
import { CartIcon } from '../../../CartIcon';

function Additional({ isMobile }: { isMobile: boolean }): React.ReactElement {
  const onPhoneClick = (): void => {
    window.location.href = 'tel:+375291136969';
  };

  return (
    <div className={styles.additionalContainer}>
      {!isMobile && (
        <div className={styles.contactPhone}>
          <button
            type="button"
            className={styles.phone}
            onClick={onPhoneClick}
          />
          <a href="tel:+375291136969" className={styles.phoneNumber}>
            +375 (29) 113-69-69
          </a>
        </div>
      )}

      <CartIcon />
    </div>
  );
}

export default Additional;

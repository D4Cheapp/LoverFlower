import React from 'react';
import styles from './HeaderContacts.module.scss';

function HeaderContacts(): React.ReactElement {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contact}>
        <a className={styles.additionalLink} href="mailto:zakaz@loverflower.by">
          zakaz@loverflower.by
        </a>
        <p className={styles.description}>
          Доставка 24/7 по договоренности с оператором
        </p>
      </div>

      <div className={styles.contact}>
        <p className={styles.additionalLink}>ул. Тимирязева 67</p>
        <p className={styles.description}>
          10:00 до 21:00 <br />
          без выходных
        </p>
      </div>
    </div>
  );
}

export default HeaderContacts;

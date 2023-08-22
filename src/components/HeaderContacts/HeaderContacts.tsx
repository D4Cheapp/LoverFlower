import React from 'react';
import style from '../Navbar/Navbar.module.scss';
// import style from './HeaderContacts.module.scss';

function HeaderContacts(): React.ReactElement {
  return (
    <div className={style.contactsContainer}>
      <div className={style.contact}>
        <a className={style.additionalLink} href="mailto:zakaz@loverflower.by">
          zakaz@loverflower.by
        </a>
        <p className={style.description}>
          Доставка 24/7 по договоренности с оператором
        </p>
      </div>

      <div className={style.contact}>
        <p className={style.additionalLink}>ул. Тимирязева 67</p>
        <p className={style.description}>
          10:00 до 21:00 <br />
          без выходных
        </p>
      </div>
    </div>
  );
}

export default HeaderContacts;

import React from 'react';
import style from './Header.module.scss';
import clsx from 'clsx';

function Header() {
  return (
    <header>
      <h1 className={style.title}>Lover</h1>
      <h1 className={clsx(style.title, style.flowerTitle)}>Flower</h1>
    </header>
  );
}

export default Header;

import React from 'react';
import clsx from 'clsx';
import style from './Header.module.scss';

function Header(): React.ReactElement {
  return (
    <header>
      <h1 className={style.title}>Lover</h1>
      <h1 className={clsx(style.title, style.flowerTitle)}>Flower</h1>
    </header>
  );
}

export default Header;

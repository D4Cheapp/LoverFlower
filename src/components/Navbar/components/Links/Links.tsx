import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import style from './Links.module.scss';

function Links(): React.ReactElement {
  const navigate: NavigateFunction = useNavigate();

  const onLogoClick = (): void => {
    navigate('/');
  };

  const onSearchClick = (): void => {
    navigate('/search');
  };

  return (
    <div className={style.links}>
      <button type="button" className={style.logo} onClick={onLogoClick} />
      <div className={style.linkContainer}>
        <NavLink className={style.link} to="/catalog">
          Каталог
        </NavLink>
        <NavLink className={style.link} to="/delivery">
          Доставка и оплата
        </NavLink>
        <NavLink className={style.link} to="/about">
          О нас
        </NavLink>
        <NavLink className={style.link} to="/contacts">
          Контакты
        </NavLink>
        <NavLink className={style.link} to="/faq">
          FAQ
        </NavLink>

        <div className={style.searchContainer}>
          <button
            type="button"
            className={style.lens}
            onClick={onSearchClick}
          />
          <NavLink className={style.link} to="/search">
            Поиск
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Links;

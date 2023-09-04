import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { catalogSideLinks } from './catalogSideLinks';
import clsx from "clsx";
import styles from './Links.module.scss';

function Links(): React.ReactElement {
  const navigate: NavigateFunction = useNavigate();
  const [isShowCatalog, setIsShowCatalog] = useState<boolean>(false);

  const onLogoClick = () => {
    navigate('/');
  };

  const onCatalogMouseEnter = () => {
    setIsShowCatalog(true);
  };

  const onCatalogMouseLeave = () => {
    setIsShowCatalog(false);
  };

  const onSearchClick = (): void => {
    navigate('/search');
  };

  return (
    <div className={styles.link}>
      <button type="button" className={styles.logo} onClick={onLogoClick} />
      <div className={styles.linkContainer}>
        <div
          className={styles.catalogLinkContainer}
          onMouseEnter={onCatalogMouseEnter}
          onMouseLeave={onCatalogMouseLeave}
        >
          <NavLink className={clsx(styles.link, styles.catalogLink)} to="/catalog">
            КАТАЛОГ
          </NavLink>

          {isShowCatalog && (
            <div className={styles.catalogSideMenu}>
              {catalogSideLinks.map(link => (
                <Link
                  className={clsx(styles.sideLink, styles.link)}
                  key={link.filter}
                  to={`/catalog?filter=${link.filter}`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <NavLink className={styles.link} to="/delivery">
          ДОСТАВКА И ОПЛАТА
        </NavLink>
        <NavLink className={styles.link} to="/about">
          О НАС
        </NavLink>
        <NavLink className={styles.link} to="/contacts">
          КОНТАКТЫ
        </NavLink>
        <NavLink className={styles.link} to="/faq">
          FAQ
        </NavLink>

        <div className={styles.searchContainer}>
          <button
            type="button"
            className={styles.lens}
            onClick={onSearchClick}
          />
          <NavLink className={styles.link} to="/search">
            Поиск
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Links;

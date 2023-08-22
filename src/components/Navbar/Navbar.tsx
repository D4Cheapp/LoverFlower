import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { Location } from 'history';
import clsx from 'clsx';
import style from './Navbar.module.scss';
import { SideMenu, Links, Additional, CartMenu } from './components';
import { AppState } from '../../redux/store/store';

function Navbar(): React.ReactElement {
  const [isAlt, setIsAlt] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(window.scrollY > 500);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1200);
  const [isSideMenuActice, setIsSideMenuActice] = useState<boolean>(false);
  const isCartActice: boolean = useSelector(
    (state: AppState) => state.flower.isCartMenuActive
  );
  const location: Location = useLocation();

  const onPageScroll = (): void => {
    setIsSticky(window.scrollY > 500);
  };

  const onWindowResize = (): void => {
    setIsMobile(window.innerWidth < 1200);
  };

  const onSideMenuClick = (): void => {
    setIsSideMenuActice(true);
  };

  useEffect((): void => {
    setIsAlt(!['/', '/catalog'].includes(location.pathname));
    if (location.pathname === '/catalog' && isMobile) {
      setIsAlt(true);
    }
  }, [isMobile, location]);

  useEffect((): (() => void) => {
    window.addEventListener('scroll', onPageScroll);
    return () => window.removeEventListener('scroll', onPageScroll);
  }, []);

  useEffect((): (() => void) => {
    setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return (
    <>
      {isSideMenuActice && <SideMenu />}
      <nav
        className={clsx(
          style.nav,
          { [style.alt]: isAlt || isSticky },
          { [style.sticky]: isSticky }
        )}
      >
        {isMobile && (
          <button
            className={style.sideMenu}
            type="button"
            onClick={onSideMenuClick}
          />
        )}

        {!isMobile && <Links />}

        {isMobile && (location.pathname !== '/' || isSticky) && (
          <h1 className={style.mobileLogo}>
            LOVER <br />
            FLOWER
          </h1>
        )}

        {(isAlt || isSticky || isMobile) && <Additional isMobile={isMobile} />}
      </nav>
      {isCartActice && <CartMenu />}
    </>
  );
}

export default Navbar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SvgSelector from 'shared/Svg.Selector';
import style from './Header.module.scss';
import headerConfig from './headerConfig';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.header_main}>
      <div className={style.header_img}>
        <SvgSelector id="logo" />
      </div>
      <div className={style.header_spisok}>
        <ul className={style.header_spisok_ul}>
          {headerConfig.map((headerItem) => {
            const isActiveClassName = pathname.includes(headerItem.path) ? style.active : '';
            return (
              <Link
                key={headerItem.id}
                to={headerItem.path}
                className={`${isActiveClassName} ${style.header_spisok_li}`}>
                <li>{headerItem.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={style.header_location}>
        <p>Нижний Новогоод</p>
      </div>
      <div className={style.header_phone}>
        <p>8 800 950-33-98</p>
      </div>
      <div className={style.header_autorization}>
        <p>Войти</p>
      </div>
    </div>
  );
};

export default Header;

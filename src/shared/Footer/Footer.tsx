import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Footer.module.scss';
import childrenConfig from './childrenConfig';
import teenagerConfig from './teenagerConfig';

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.footer_main}>
      <div>
        <div className={style.footer_img}>
          <img src="" alt="" />
        </div>
        <div className={style.footer_phone}>
          <p>8 800 950-33-98</p>
        </div>
        <div className={style.footer_location}>
          <p>г. Москва, ул. Ленина, д. 50</p>
        </div>
        <div className={style.footer_email}>
          <p>info@hodfutureacademy.ru</p>
        </div>
        <div className={style.footer_socialnet}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className={style.footer_info}>
          <p>© ХОД, Future Academy</p>
        </div>
      </div>
      <div className={style.children_menu}>
        <h3>Детям</h3>
        <ul>
          {childrenConfig.map((chilItem) => {
            const isActiveClassNName = pathname.includes(chilItem.path) ? style.active : '';
            return (
              <Link
                key={chilItem.id}
                to={chilItem.path}
                className={`${isActiveClassNName} ${style.chilrenFooter}`}>
                <li>{chilItem.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>Подросткам</h3>
        <ul>
          {teenagerConfig.map((chilItem) => {
            const isActiveClassNName = pathname.includes(chilItem.path) ? style.active : '';
            return (
              <Link
                key={chilItem.id}
                to={chilItem.path}
                className={`${isActiveClassNName} ${style.chilrenFooter}`}>
                <li>{chilItem.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

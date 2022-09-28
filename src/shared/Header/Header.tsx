import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.header_main}>
      <div className={style.header_img}>
        <img src="" alt="" />
      </div>
      <div className={style.header_courses}>
        <p>Все курсы</p>
      </div>
      <div className={style.header_events}>
        <p>Мероприятия</p>
      </div>
      <div className={style.header_base}>
        <p>Базы знаний</p>
      </div>
      <div className={style.header_career}>
        <p>Карьера</p>
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

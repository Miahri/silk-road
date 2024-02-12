import React from 'react';
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <NavLink to={'/new-products'} className={({isActive}) => isActive ? styles.active : ''}>
        Новинки</NavLink>
      <NavLink to={'/sale'} className={({isActive}) => isActive ? styles.active : ''}>
        Скидки</NavLink>
      <NavLink to={'/catalog'} className={({isActive}) => isActive ? styles.active : ''}>
        Каталог</NavLink>
      <NavLink to={'/contact'} className={({isActive}) => isActive ? styles.active : ''}>
        Менеджер</NavLink>
    </div>
  );
};
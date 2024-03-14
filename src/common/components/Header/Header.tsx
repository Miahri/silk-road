import React, {useEffect, useState} from 'react';
import {Nav} from './Nav/Nav';
import styles from './Header.module.css';
import logo from './logos/logo.png';
import phoneIcon from './icons/phone.svg';
import {NavLink} from "react-router-dom";
import burgerIcon from './icons/burger-menu.svg';

type PropsType = {
  handleOpen: () => void
}

export const Header = (props: PropsType) => {
  const [showExternalIcon, setShowExternalIcon] = useState(false);
  const phoneNumber1 = '+7 (905) 506-17-77';
  const phoneNumber2 = '+7 (991) 202-49-41';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px), (min-width: 769px) and (max-width: 1024px)');

    const handleResize = () => {
      setShowExternalIcon(mediaQuery.matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCallClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {showExternalIcon && <img
            src={burgerIcon}
            className={styles.burgerMenuIcon}
            onClick={props.handleOpen}
            alt={'open menu'}
        />}
        <NavLink to={'/'}><img src={logo} alt={'logo'} className={styles.logo}/></NavLink>
        {!showExternalIcon && <Nav/>}
        <div className={styles.phone}>
          <img src={phoneIcon} alt={'phoneIcon'}/>
          <div className={styles.phoneNumbers}>
            <p onClick={() => handleCallClick(phoneNumber1)}>{phoneNumber1}</p>
            <p onClick={() => handleCallClick(phoneNumber2)}>{phoneNumber2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
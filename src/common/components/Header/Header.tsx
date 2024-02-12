import React from 'react';
import {Nav} from './Nav/Nav';
import styles from './Header.module.css';
import logo from './logo.png';
import phoneIcon from './phoneIcon.png';
import container from "../../styles/Container.module.css";
import {NavLink} from "react-router-dom";

export const Header = () => {
  const phoneNumber1 = '+7(905)506-17-77';
  const phoneNumber2 = '+7(991)202-49-41';

  const handleCallClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <div className={styles.header}>
      <div className={container.container}>
        <NavLink to={'/'}><img src={logo} alt={'logo'} className={styles.logo} /></NavLink>
        <Nav/>
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
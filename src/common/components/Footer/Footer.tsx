import React from 'react';
import footerLogo from './logos/footerLogo.png';
import styles from "./Footer.module.css";
import container from '../../styles/Container.module.css';
import card from '../../styles/Card.module.css';
import {v1} from "uuid";
import {ContactItem, ContactItemType} from "./Contacts/ContactItem";
import callIcon from './icons/phone.svg';
import emailIcon from './icons/email.svg';
import locationIcon from './icons/location.svg';
import fbIcon from './icons/facebook.svg';
import instaIcon from './icons/insta.svg';
import tgIcon from './icons/telegram.svg';
import vkIcon from './icons/vk.svg';
import waIcon from './icons/wa.svg';

const contacts: ContactItemType[] = [
  {id: v1(), name: 'phone', contactIcon: callIcon, contactData: ['+7(905)506-17-77', '+7(991)202-49-41']},
  {id: v1(), name: 'email', contactIcon: emailIcon, contactData: ['silkroad@gmail.com']},
  {id: v1(), name: 'location', contactIcon: locationIcon, contactData: ['Линия 18, Пав. 58/60/62']},
]

export const Footer = () => {
  return (
    <div className={`${container.section} ${styles.section}`}>
      <div className={styles.container}>
          <div>
            <img src={footerLogo} alt={'logo'} className={styles.footerLogo}/>
          </div>
          <div className={`${card.infoBlock} ${styles.contactBlock}`}>
            <p>Контакты</p>
            {contacts.map(el => <ContactItem key={el.id} item={el} />)}
          </div>
          <div className={`${card.infoBlock} ${styles.socialBlock}`}>
            <p>Социальные страницы</p>
            <div className={styles.contact}>
              <a href={'https://m.facebook.com'}><img src={fbIcon} alt={'facebook'}/></a>
              <a href={'https://www.instagram.com'}><img src={instaIcon} alt={'instagram'}/></a>
              <a href={'https://web.telegram.org'}><img src={tgIcon} alt={'telegram'}/></a>
              <a href={'https://vk.com'}><img src={vkIcon} alt={'vk'}/></a>
              <a href={'https://www.whatsapp.com'}><img src={waIcon} alt={'whatsapp'}/></a>
            </div>
          </div>
      </div>
    </div>
  );
};
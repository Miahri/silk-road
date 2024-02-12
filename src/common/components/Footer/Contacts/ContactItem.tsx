import React, {FC} from 'react';
import styles from "../Footer.module.css";

export type ContactItemType = {
  id: string
  name: string
  contactIcon: any
  contactData: string[]
}

type ContactItemPropsType = {
  item: ContactItemType
}

export const ContactItem: FC<ContactItemPropsType> = (props) => {

  const handleContactClick = (name: string, contact: string) => {
    let ref;
    ref = name === 'phone' ? `tel:${contact}` :
      name === 'email' ? `mailto:${contact}` :
        name === 'location' ? `https://www.google.com/maps/dir//${encodeURIComponent(contact)}` : '';
    window.location.href = ref;
  }

  return (
    <div className={styles.contact}>
      <img src={props.item.contactIcon} alt={`${props.item.name}Icon`}/>
      <div>
        {props.item.contactData.map((contact, index) =>
          <p key={index} onClick={() => {handleContactClick(props.item.name, contact)}}>{contact}</p>)}
      </div>
    </div>
  );
};
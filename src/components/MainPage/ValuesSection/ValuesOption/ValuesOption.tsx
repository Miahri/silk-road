import React, {FC} from 'react';
import styles from '../ValuesSection.module.css';

export type OptionType = {
  id: string
  icon: any
  name: string
  description: string
}

type OptionPropsType = {
  option: OptionType
}

export const ValuesOption: FC<OptionPropsType> = (props) => {
  return (
    <div className={styles.option}>
      <img src={props.option.icon} alt={`${props.option.name}Icon`} className={styles.orderIcon}/>
      <h3>{props.option.name}</h3>
      <p>{props.option.description}</p>
    </div>
  );
};
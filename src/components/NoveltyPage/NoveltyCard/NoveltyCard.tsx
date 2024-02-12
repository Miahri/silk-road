import React, {FC} from 'react';
import card from '../../../common/styles/Card.module.css';
import button from '../../../common/styles/Button.module.css';
import styles from './NoveltyCard.module.css';

export type NoveltyCardType = {
  id: string
  photo: string
  name: string
  description: string
  cost: string
}

type NoveltyCardPropsType = {
  novelty: NoveltyCardType
}

export const NoveltyCard: FC<NoveltyCardPropsType> = (props) => {
  return (
    <div className={`${card.card} ${styles.noveltyCard}`}>
      <img src={props.novelty.photo} alt="product"/>
      <div className={styles.description}>
        <p>#{(props.novelty.id).slice(0, 5)}</p>
        <h3>{props.novelty.name}</h3>
        <p>{props.novelty.description}</p>
        <h3>{props.novelty.cost}</h3>
        <button className={button.button}>Подробнее</button>
      </div>
    </div>
  );
};

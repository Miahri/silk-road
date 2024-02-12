import React, {FC} from 'react';
import card from "../../../../common/styles/Card.module.css";
import catalog from "../CatalogSection.module.css";
import button from "../../../../common/styles/Button.module.css";
import {NoveltyCardType} from "../../../NoveltyPage/NoveltyCard/NoveltyCard";

type CatalogCardPropsType = {
  novelty: NoveltyCardType
}

export const CatalogCard: FC<CatalogCardPropsType> = (props) => {

  return (
    <div>
      <img src={props.novelty.photo} alt={"catalog"}/>
      <div className={`${card.infoBlock} ${catalog.description}`}>
        <p>{props.novelty.name}</p>
        <button className={button.button}>Подробнее</button>
      </div>
    </div>
  );
};
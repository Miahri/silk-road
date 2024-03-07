import React, {FC} from 'react';
import card from "../../../../common/styles/Card.module.css";
import catalog from "../CatalogSection.module.css";
import button from "../../../../common/styles/Button.module.css";
import {CatalogItemsType} from "../../../../api/types";
import beautyProd from './8.png';

type CatalogCardPropsType = {
  catalogItem: CatalogItemsType
}

export const CatalogCard: FC<CatalogCardPropsType> = (props) => {

  return (
    <>
      <img src={beautyProd} alt={"catalog"}/>
      <div className={`${card.infoBlock} ${catalog.description}`}>
        <p>{props.catalogItem.name}</p>
        <button className={button.button}>Подробнее</button>
      </div>
    </>
  );
};
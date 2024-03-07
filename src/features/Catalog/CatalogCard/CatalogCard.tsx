import React, {FC} from 'react';
import card from "../../../common/styles/Card.module.css";
import catalog from "../CatalogSection/CatalogSection.module.css";
import button from "../../../common/styles/Button.module.css";
import {CatalogItemsType} from "../../../api/types";
import beautyProd from './8.png';
import {useNavigate} from "react-router-dom";

type CatalogCardPropsType = {
  catalogItem: CatalogItemsType
}

export const CatalogCard: FC<CatalogCardPropsType> = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/catalog/${props.catalogItem.id}/products`);
  }

  return (
    <>
      <img src={beautyProd} alt={"catalog"}/>
      <div className={`${card.infoBlock} ${catalog.description}`}>
        <p>{props.catalogItem.name}</p>
        <button className={button.button} onClick={onClickHandler}>Подробнее</button>
      </div>
    </>
  );
};
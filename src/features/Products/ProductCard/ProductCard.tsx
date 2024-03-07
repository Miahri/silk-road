import React, {FC} from 'react';
import card from '../../../common/styles/Card.module.css';
import button from '../../../common/styles/Button.module.css';
import styles from './ProductCard.module.css';
import syossPure from '../ProductBlock/syossPure.png';
import {Params, useNavigate, useParams} from "react-router-dom";
import {ProductType} from "../../../api/types";

type ProductCardPropsType = {
  product: ProductType
}

export const ProductCard: FC<ProductCardPropsType> = (props) => {
  const navigate = useNavigate();
  const {catalogItemId} = useParams<Params>();

  const onClickHandler = () => {
    const id = catalogItemId ? catalogItemId : "new";
    navigate(`/catalog/${id}/products/${props.product.id}`);
  }

  return (
    <div className={`${card.card} ${styles.noveltyCard}`}>
      <img src={syossPure} alt="product"/>
      <div className={styles.description}>
        <p>#{props.product.id}</p>
        <h3 className={styles.name}>{props.product.name}</h3>
        <p className={styles.descr}>{props.product.description}</p>
        <h3>{props.product.cost}</h3>
        <button className={button.button} onClick={onClickHandler}>Подробнее</button>
      </div>
    </div>
  );
};

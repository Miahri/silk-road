import React, {FC} from 'react';
import wrapper from "../../common/styles/Wrapper.module.css";
import card from "../../common/styles/Card.module.css";
import product from "./ProductPage.module.css";
import button from "../../common/styles/Button.module.css";
import {ProductType} from "./ProductPage";
import {Table} from "./Table";

type ProductCardPropsType = {
  product: ProductType
}

export const ProductCard: FC<ProductCardPropsType> = (props) => {
  return (
    <div className={wrapper.wrapper}>
      <div className={`${card.infoBlock} ${product.mainInfo}`}>
        <h3>{props.product.name}</h3>
        <Table properties={props.product.properties.slice(0, 5)}/>
        <p>{props.product.cost}</p>
        <button className={button.button}>Написать менеджеру</button>
      </div>
      <div className={wrapper.productImg}>
        <img src={props.product.photo} alt={props.product.name}/>
      </div>
    </div>
  );
};
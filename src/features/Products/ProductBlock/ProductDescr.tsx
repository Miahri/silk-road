import React, {FC} from 'react';
import card from "../../../common/styles/Card.module.css";
import product from "../ProductPage/ProductPage.module.css";
import {Table} from "./Table";
import {ProductType} from "../../../api/types";

type ProductDescrPropsType = {
  product: ProductType
}

export const ProductDescr: FC<ProductDescrPropsType> = (props) => {
  return (
    <div className={`${card.infoBlock} ${product.details}`}>
      <h4>Описание</h4>
      <p>{props.product.description}</p>
      <h4>Состав</h4>
      <p>{props.product.composition}</p>
      <h4>Способ применения</h4>
      <p>{props.product.application}</p>
      <h4>Характеристики</h4>
      <div>
        <Table properties={props.product.properties}/>
      </div>
    </div>
  );
};
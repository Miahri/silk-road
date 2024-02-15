import React, {FC} from 'react';
import product from './ProductPage.module.css';
import container from '../../common/styles/Container.module.css';
import wrapper from '../../common/styles/Wrapper.module.css';
import {ProductCard} from "./ProductCard";
import {ProductDescr} from "./ProductDescr";

export type PropertyType = {
  id: string
  name: string
  value: string
}

export type ProductType = {
  id: string
  name: string
  photo: any
  description: string
  composition: string
  application: string
  amount: number
  cost: string
  properties: PropertyType[]
}

type ProductPagePropsType = {
  product: ProductType
}

export const ProductPage: FC<ProductPagePropsType> = (props) => {
  return (
    <div className={`${container.container} ${product.container}`}>
      <p>Главное/Каталог/Товары красоты/Шампунь для волос</p>
      <div className={`${wrapper.wrapper} ${product.ID}`}>
        <span>#{props.product.id.slice(0, 5)}</span>
        <span>В наличии {props.product.amount} шт.</span>
      </div>
      <ProductCard product={props.product} />
      <ProductDescr product={props.product} />
    </div>
  );
};
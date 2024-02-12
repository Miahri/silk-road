import React, {FC} from 'react';
import product from './ProductPage.module.css';
import container from '../../common/styles/Container.module.css';
import wrapper from '../../common/styles/Wrapper.module.css';
import button from '../../common/styles/Button.module.css';
import card from '../../common/styles/Card.module.css';

type PropertyType = {
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
      <div className={wrapper.wrapper}>
        <div className={`${card.infoBlock} ${product.mainInfo}`}>
          <h3>{props.product.name}</h3>
          <table>
            {props.product.properties.slice(0, 5).map((pr: PropertyType) => {
                return <tr key={pr.id}>
                  <td>{pr.name}</td>
                  <td>{pr.value}</td>
                </tr>
            })}
          </table>
          <p>{props.product.cost}</p>
          <button className={button.button}>Написать менеджеру</button>
        </div>
        <div className={wrapper.productImg}>
          <img src={props.product.photo} alt={props.product.name}/>
        </div>
      </div>
      <div className={`${card.infoBlock} ${product.details}`}>
        <h4>Описание</h4>
        <p>{props.product.description}</p>
        <h4>Состав</h4>
        <p>{props.product.composition}</p>
        <h4>Способ применения</h4>
        <p>{props.product.application}</p>
        <h4>Характеристики</h4>
        <div>
          <table>
            {props.product.properties.map((pr: PropertyType) => {
              return <tr key={pr.id}>
                <td>{pr.name}</td>
                <td>{pr.value}</td>
              </tr>
            })}
          </table>
        </div>
      </div>
    </div>
  );
};
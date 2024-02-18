import React from 'react';
import container from "../../../common/styles/Container.module.css";
import wrapper from '../../../common/styles/Wrapper.module.css';
import {OptionType, OrderOption} from "./OrderOption/OrderOption";
import order from './OrderSection.module.css';
import {v1} from "uuid";
import cart from './icons/cartIcon.png';
import email from './icons/emailIcon.png';
import home from './icons/homeIcon.png';

const orderOptions: OptionType[] = [
  {id: v1(), icon: cart, name: 'Короткий тезис', description: 'Подробный текст в две строки для внесения ясности и деталей'},
  {id: v1(), icon: email, name: 'Короткий тезис', description: 'Подробный текст в две строки для внесения ясности и деталей'},
  {id: v1(), icon: home, name: 'Короткий тезис', description: 'Подробный текст в две строки для внесения ясности и деталей'}
]

export const OrderSection = () => {
  return (
    <div className={`${container.section} ${order.section}`}>
      <div className={`${container.container} ${order.container}`}>
        <h2>Как оформить заказы?</h2>
        <div className={wrapper.wrapper}>
          {orderOptions.map(el => <OrderOption key={el.id} option={el}/>)}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import container from "../../../common/styles/Container.module.css";
import wrapper from '../../../common/styles/Wrapper.module.css';
import {OptionType, ValuesOption} from "./ValuesOption/ValuesOption";
import values from './ValuesSection.module.css';
import {v1} from "uuid";
import cart from './icons/cart-shopping.svg';
import email from './icons/email.svg';
import home from './icons/home.svg';

const valuesOptions: OptionType[] = [
  {id: v1(), icon: cart, name: 'Короткий тезис', description: 'Подробный текст в две строки для внесения ясности и деталей'},
  {id: v1(), icon: email, name: 'Короткий тезис', description: 'Подробный текст в две строки для внесения ясности и деталей'},
  {id: v1(), icon: home, name: 'Короткий тезис', description: 'Подробный текст в две строки для внесения ясности и деталей'}
]

export const ValuesSection = () => {
  return (
    <div className={`${container.section} ${values.section}`}>
      <div className={`${container.container} ${values.container}`}>
        <h2>Как оформить заказы?</h2>
        <div className={wrapper.wrapper}>
          {valuesOptions.map(el => <ValuesOption key={el.id} option={el}/>)}
        </div>
      </div>
    </div>
  );
};
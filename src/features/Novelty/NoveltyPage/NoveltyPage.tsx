import React, {FC} from 'react';
import styles from "./NoveltyPage.module.css";
import container from '../../../common/styles/Container.module.css';
import {ProductCard} from "../../Products/ProductCard/ProductCard";
import wrapper from "../../../common/styles/Wrapper.module.css";
import {NavLink} from "react-router-dom";
import {ProductType} from "../../../api/types";

type NoveltySectionPropsType = {
  styles: string
  novelties: ProductType[]
}

export const NoveltyPage: FC<NoveltySectionPropsType> = (props) => {
  const arr = props.styles !== '' ? props.novelties.slice(0, 3) : props.novelties;

  return (
    <div className={props.styles}>
      <div className={`${container.container} ${styles.container}`}>
        <NavLink to={'/new-products'}><h2>Новинки</h2></NavLink>
        <div className={wrapper.wrapper}>
          {arr.map(pr => <ProductCard key={pr.id} product={pr}/>)}
        </div>
      </div>
    </div>
  );
};
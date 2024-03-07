import React, {FC, useEffect, useState} from 'react';
import wrapper from "../../../common/styles/Wrapper.module.css";
import card from "../../../common/styles/Card.module.css";
import product from "../ProductPage/ProductPage.module.css";
import button from "../../../common/styles/Button.module.css";
import {Table} from "./Table";
import {ProductType} from "../../../api/types";
import syossPure from './syossPure.png';

type ProductInfoPropsType = {
  product: ProductType
}

export const ProductInfo: FC<ProductInfoPropsType> = (props) => {
  const [showExternalImg, setShowExternalImg] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px), (min-width: 769px) and (max-width: 1024px)');

    const handleResize = () => {
      setShowExternalImg(mediaQuery.matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={wrapper.wrapper}>
      <div className={`${card.infoBlock} ${product.mainInfo}`}>
        {showExternalImg && <img src={syossPure}
                                 alt={props.product.name}
                                 className={wrapper.productImg}/>}
        <h3>{props.product.name}</h3>
        <Table properties={props.product.properties.slice(0, 5)}/>
        <p>{props.product.cost}</p>
        <button className={button.button}>Написать менеджеру</button>
      </div>
      {!showExternalImg && <img src={props.product.photo}
                               alt={props.product.name}
                               className={wrapper.productImg}/>}
    </div>
  );
};
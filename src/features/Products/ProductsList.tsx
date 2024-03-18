import React, {useEffect} from 'react';
import styles from "../Novelty/NoveltyPage/NoveltyPage.module.css";
import container from "../../common/styles/Container.module.css";
import {useParams} from "react-router-dom";
import wrapper from "../../common/styles/Wrapper.module.css";
import {ProductCard} from "./ProductCard/ProductCard";
import {useActions} from "../../utils/redux-utils";
import {productsActions} from "./index";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {ProductsStateType} from "./products-reducer";
import {CatalogItemsType} from "../../api/types";

type Params = {
  catalogItemId: string
}

export const ProductsList = () => {
  const products = useSelector<AppRootStateType, ProductsStateType>(state => state.products);
  const catalog = useSelector<AppRootStateType, Array<CatalogItemsType>>(state => state.catalog);
  const {catalogItemId} = useParams<Params>();
  const {fetchProductsTC} = useActions(productsActions);

  const catalogItem = catalog.find(ct => ct.id === catalogItemId);
  const pageName = catalogItem ? catalogItem.name : 'Продукты';

  useEffect(() => {
    if(catalogItemId) {
      fetchProductsTC(catalogItemId);
    }
  }, [catalogItemId]);

  const productItems = catalogItemId ? products[catalogItemId]: [];

  return (
    <div>
      <div className={`${container.container} ${styles.container}`}>
        <h2>{pageName}</h2>
        <div className={wrapper.wrapper}>
          {productItems.length && productItems.map(pr => <ProductCard key={pr.id} product={pr} />)}
          {!productItems.length && <p>Нет товаров</p>}
        </div>
      </div>
    </div>
  );
};
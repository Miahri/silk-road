import React, {useEffect} from 'react';
import product from './ProductPage.module.css';
import container from '../../../common/styles/Container.module.css';
import wrapper from '../../../common/styles/Wrapper.module.css';
import {ProductInfo} from "../ProductBlock/ProductInfo";
import {ProductDescr} from "../ProductBlock/ProductDescr";
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../utils/types";
import {ProductsStateType} from "../products-reducer";
import {CatalogItemsType} from "../../../api/types";

type Params = {
  catalogItemId: string
  productId: string
}

export const ProductPage = () => {
  const {catalogItemId, productId} = useParams<Params>();

  const products = useSelector<AppRootStateType, ProductsStateType>(state => state.products);
  const catalog = useSelector<AppRootStateType, Array<CatalogItemsType>>(state => state.catalog);

  const productItem = catalogItemId && products[catalogItemId].find(pr => pr.id === productId);

  const catalogItem = catalog.find(ct => ct.id === catalogItemId);
  const pageName = catalogItem ? catalogItem.name : 'Продукты';

  useEffect(() => {
    console.log(catalogItemId)
  }, [])

  return (
    <div className={`${container.container} ${product.container}`}>
      {productItem && <>
          <p>
              <NavLink to={"/"}>Главная</NavLink>/
              <NavLink to={"/catalog"}>Каталог</NavLink>/
              <NavLink to={`/catalog/${catalogItemId}/products`}>{pageName}</NavLink>/
              <NavLink to={`/catalog/${catalogItemId}/products/${productId}`}>{productItem.name}</NavLink>
          </p>
          <div className={`${wrapper.wrapper} ${product.ID}`}>
              <span>#{productItem.id}</span>
              <span>В наличии {productItem.amount} шт.</span>
          </div>
          <ProductInfo product={productItem}/>
          <ProductDescr product={productItem}/>
      </>}
    </div>
  );
};
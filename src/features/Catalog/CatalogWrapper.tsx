import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {CatalogItemsType} from "../../api/types";
import {CatalogSection} from "./CatalogSection/CatalogSection";
import {CatalogPage} from "./CatalogPage/CatalogPage";
import {useActions} from "../../utils/redux-utils";
import {catalogActions} from "./index";

type CatalogWrapperPropsType = {
  section: boolean
}

export const CatalogWrapper: FC<CatalogWrapperPropsType> = ({section}) => {
  const catalog = useSelector<AppRootStateType, Array<CatalogItemsType>>(state => state.catalog);

  const {fetchCatalogTC} = useActions(catalogActions);

  useEffect(() => {
    fetchCatalogTC();
  }, [])

  const content = section ? <CatalogSection catalogItems={catalog} />
    : <CatalogPage catalog={catalog} />

  return (
    <>{content}</>
  );
};
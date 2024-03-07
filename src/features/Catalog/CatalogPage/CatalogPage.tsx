import React, {FC} from 'react';
import container from "../../../common/styles/Container.module.css";
import styles from "./CatalogPage.module.css";
import wrapper from "../../../common/styles/Wrapper.module.css";
import {CatalogCard} from "../CatalogCard/CatalogCard";
import card from "../../../common/styles/Card.module.css";
import {CatalogItemsType} from "../../../api/types";

type CatalogPagePropsType = {
  catalog: CatalogItemsType[]
}

export const CatalogPage: FC<CatalogPagePropsType> = ({catalog}) => {
  return (
    <div>
      <div className={`${container.container} ${styles.container}`}>
        <h2>Каталог</h2>
        <div className={wrapper.wrapper}>
          {catalog.map(item => <div className={`${card.card} ${styles.card}`}>
              <CatalogCard key={item.id} catalogItem={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
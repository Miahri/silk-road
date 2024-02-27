import React from 'react';
import container from "../../common/styles/Container.module.css";
import styles from "../NoveltyPage/NoveltyPage.module.css";
import wrapper from "../../common/styles/Wrapper.module.css";
import {NoveltyCard} from "../NoveltyPage/NoveltyCard/NoveltyCard";
import {noveltyArr} from "../NoveltyPage/NoveltyPage";

export const CatalogPage = () => {
  return (
    <div>
      <div className={`${container.container} ${styles.container}`}>
        <h2>Каталог</h2>
        <div className={wrapper.wrapper}>
          {noveltyArr.map(pr => <NoveltyCard key={pr.id} novelty={pr}/>)}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import container from "../../../common/styles/Container.module.css";
import catalog from './CatalogSection.module.css';
import {noveltyArr} from "../../NoveltyPage/NoveltyPage";
import card from '../../../common/styles/Card.module.css';
import {NavLink} from "react-router-dom";
import {CatalogCard} from "./CatalogCard/CatalogCard";

export const CatalogSection = () => {
  return (
    <div className={`${container.section} ${catalog.section}`}>
      <div className={`${container.container} ${catalog.container}`}>
        <NavLink to={'/catalog'}><h2>Каталог</h2></NavLink>
        <div className={catalog.wrapper}>
          <div className={`${card.card} ${catalog.box1}`}>
              <CatalogCard novelty={noveltyArr[0]} />
          </div>
          <div className={`${card.card} ${catalog.box2}`}>
            <CatalogCard novelty={noveltyArr[1]} />
          </div>
          <div className={`${card.card} ${catalog.box3}`}>
            <CatalogCard novelty={noveltyArr[2]} />
          </div>
          <div className={`${card.card} ${catalog.box4}`}>
            <CatalogCard novelty={noveltyArr[3]} />
          </div>
          <div className={`${card.card} ${catalog.box5}`}>
            <CatalogCard novelty={noveltyArr[4]} />
          </div>
          <div className={`${card.card} ${catalog.box6}`}>
            <CatalogCard novelty={noveltyArr[5]} />
          </div>
          <div className={`${card.card} ${catalog.box7}`}>
            <CatalogCard novelty={noveltyArr[6]} />
          </div>
          <div className={`${card.card} ${catalog.box8}`}>
            <CatalogCard novelty={noveltyArr[7]} />
          </div>
        </div>

      </div>
    </div>
  );
};
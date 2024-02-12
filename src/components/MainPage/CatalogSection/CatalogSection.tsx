import React from 'react';
import container from "../../../common/styles/Container.module.css";
import button from '../../../common/styles/Button.module.css';
import catalog from './CatalogSection.module.css';
import {noveltyArr} from "../../NoveltyPage/NoveltyPage";
import card from '../../../common/styles/Card.module.css';
import {NavLink} from "react-router-dom";

export const CatalogSection = () => {
  return (
    <div className={`${container.section} ${catalog.section}`}>
      <div className={`${container.container} ${catalog.container}`}>
        <NavLink to={'/catalog'}><h2>Каталог</h2></NavLink>
        <div className={catalog.wrapper}>
          <div className={`${card.card} ${catalog.box1}`}>
            <img src={noveltyArr[0].photo} alt={"catalog"}/>
            <div className={`${card.infoBlock} ${catalog.description}`}>
              <p>{noveltyArr[0].name}</p>
              <button className={button.button}>Подробнее</button>
            </div>
          </div>
          <div className={`${card.card} ${catalog.box2}`}>
            <img src={noveltyArr[1].photo} alt={"catalog"}/>
            <div className={`${card.infoBlock} ${catalog.description}`}>
              <p>{noveltyArr[1].name}</p>
              <button className={button.button}>Подробнее</button>
            </div>
          </div>
          <div className={`${card.card} ${catalog.box3}`}>
            <img src={noveltyArr[2].photo} alt={"catalog"}/>
            <div className={`${card.infoBlock} ${catalog.description}`}>
              <p>{noveltyArr[2].name}</p>
              <button className={button.button}>Подробнее</button>
            </div>
          </div>
          <div className={`${card.card} ${catalog.box4}`}>
            <img src={noveltyArr[1].photo} alt={"catalog"}/>
            <div className={`${card.infoBlock} ${catalog.description}`}>
              <p>{noveltyArr[1].name}</p>
              <button className={button.button}>Подробнее</button>
            </div>
          </div>
          <div className={`${card.card} ${catalog.box5}`}>
            <img src={noveltyArr[0].photo} alt={"catalog"}/>
            <div className={`${card.infoBlock} ${catalog.description}`}>
              <p>{noveltyArr[0].name}</p>
              <button className={button.button}>Подробнее</button>
            </div>
          </div>
          <div className={`${card.card} ${catalog.box6}`}>
            <img src={noveltyArr[1].photo} alt={"catalog"}/>
            <div className={`${card.infoBlock} ${catalog.description}`}>
              <p>{noveltyArr[1].name}</p>
              <button className={button.button}>Подробнее</button>
            </div>
          </div>
          <div className={`${card.card} ${catalog.box7}`}>
            <img src={noveltyArr[2].photo} alt={"catalog"}/>
            <div className={`${card.infoBlock} ${catalog.description}`}>
              <p>{noveltyArr[2].name}</p>
              <button className={button.button}>Подробнее</button>
            </div>
          </div>
          <div className={`${card.card} ${catalog.box8}`}>
            <img src={noveltyArr[1].photo} alt={"catalog"}/>
            <div className={`${card.infoBlock} ${catalog.description}`}>
              <p>{noveltyArr[1].name}</p>
              <button className={button.button}>Подробнее</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
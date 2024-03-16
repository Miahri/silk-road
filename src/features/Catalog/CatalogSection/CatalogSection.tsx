import React, {FC} from 'react';
import container from "../../../common/styles/Container.module.css";
import catalogStyles from './CatalogSection.module.css';
import card from '../../../common/styles/Card.module.css';
import {NavLink} from "react-router-dom";
import {CatalogCard} from "../CatalogCard/CatalogCard";
import {CatalogItemsType} from "../../../api/types";

type CatalogSectionPropsType = {
  catalogItems: CatalogItemsType[]
}

export const CatalogSection: FC<CatalogSectionPropsType> = ({catalogItems}) => {
  return (
    <div className={`${container.section} ${catalogStyles.section}`}>
      <div className={`${container.container} ${catalogStyles.container}`}>
        <NavLink to={'/catalog'}><h2>Каталог</h2></NavLink>
        <div className={catalogStyles.wrapper}>
          {catalogItems[0] && <div className={`${card.card} ${catalogStyles.box1}`}>
            <CatalogCard key={catalogItems[0].id} catalogItem={catalogItems[0]} />
          </div>}
          {catalogItems[1] && <div className={`${card.card} ${catalogStyles.box2}`}>
            <CatalogCard key={catalogItems[1].id} catalogItem={catalogItems[1]} />
          </div>}
          {catalogItems[2] && <div className={`${card.card} ${catalogStyles.box3}`}>
            <CatalogCard key={catalogItems[2].id} catalogItem={catalogItems[2]} />
          </div>}
          {catalogItems[3] && <div className={`${card.card} ${catalogStyles.box4}`}>
            <CatalogCard key={catalogItems[3].id} catalogItem={catalogItems[3]} />
          </div>}
          {catalogItems[4] && <div className={`${card.card} ${catalogStyles.box5}`}>
            <CatalogCard key={catalogItems[4].id} catalogItem={catalogItems[4]} />
          </div>}
          {catalogItems[5] && <div className={`${card.card} ${catalogStyles.box6}`}>
            <CatalogCard key={catalogItems[5].id} catalogItem={catalogItems[5]} />
          </div>}
          {catalogItems[6] && <div className={`${card.card} ${catalogStyles.box7}`}>
            <CatalogCard key={catalogItems[6].id} catalogItem={catalogItems[6]} />
          </div>}
          {catalogItems[7] && <div className={`${card.card} ${catalogStyles.box8}`}>
            <CatalogCard key={catalogItems[7].id} catalogItem={catalogItems[7]} />
          </div>}
        </div>
      </div>
    </div>
  );
};
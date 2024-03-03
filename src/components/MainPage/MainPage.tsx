import React from 'react';
import container from '../../common/styles/Container.module.css';
import {InfoSection} from "./InfoSection/InfoSection";
import {BrandSection} from "./BrandSection/BrandSection";
import {CatalogSection} from "../../features/Catalog/CatalogSection/CatalogSection";
import {ValuesSection} from "./ValuesSection/ValuesSection";
import {NoveltyPage} from "../../features/NoveltyPage/NoveltyPage";
import {OrderSection} from "./OrderSection/OrderSection";

export const MainPage = () => {
  return (
    <div>
      <InfoSection />
      <BrandSection />
      <NoveltyPage styles={`${container.section}`}/>
      <CatalogSection />
      <ValuesSection />
      {/*<OrderSection />*/}
    </div>
  );
};
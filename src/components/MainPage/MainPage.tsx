import React from 'react';
import container from '../../common/styles/Container.module.css';
import {InfoSection} from "./InfoSection/InfoSection";
import {BrandSection} from "./BrandSection/BrandSection";
import {CatalogSection} from "./CatalogSection/CatalogSection";
import {OrderSection} from "./OrderSection/OrderSection";
import {NoveltyPage} from "../NoveltyPage/NoveltyPage";

export const MainPage = () => {
  return (
    <div>
      <InfoSection />
      <BrandSection />
      <NoveltyPage styles={`${container.section}`}/>
      <CatalogSection />
      <OrderSection />
    </div>
  );
};
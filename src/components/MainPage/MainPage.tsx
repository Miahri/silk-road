import React from 'react';
import {InfoSection} from "./InfoSection/InfoSection";
import {BrandSection} from "./BrandSection/BrandSection";
import {ValuesSection} from "./ValuesSection/ValuesSection";
import {CatalogWrapper} from "../../features/Catalog/CatalogWrapper";
import {NoveltyWrapper} from "../../features/Novelty/NoveltyWrapper";

export const MainPage = () => {
  return (
    <div>
      <InfoSection />
      <BrandSection />
      <NoveltyWrapper section={true} />
      <CatalogWrapper section={true}/>
      <ValuesSection />
    </div>
  );
};
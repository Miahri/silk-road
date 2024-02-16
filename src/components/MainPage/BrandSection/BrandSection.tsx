import React from 'react';
import styles from './BrandSection.module.css'
import container from '../../../common/styles/Container.module.css'
import niveaLogo from './logos/niveaLogo.png';
import syossLogo from './logos/syossLogo.png';
import oldSpiceLogo from './logos/oldSpiceLogo.png';
import schaumaLogo from './logos/schaumaLogo.png';
 import {NavLink} from "react-router-dom";

export const BrandSection = () => {
  return (
    <div className={styles.section}>
      <div className={container.container}>
        <NavLink to={'/new-products'}><img src={niveaLogo} alt={'nivea-logo'}/></NavLink>
        <NavLink to={'/new-products'}><img src={syossLogo} alt={'syoss-logo'}/></NavLink>
        <NavLink to={'/new-products'}><img src={oldSpiceLogo} alt={'oldSpice-logo'}/></NavLink>
        <NavLink to={'/new-products'}><img src={schaumaLogo} alt={'schauma-logo'}/></NavLink>
      </div>
    </div>
  );
};
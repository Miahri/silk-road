import React from 'react';
import styles from './BrandSection.module.css'
import container from '../../../common/styles/Container.module.css'
import niveaLogo from './logos/niveaLogo.png';
import syossLogo from './logos/syossLogo.png';
import oldSpiceLogo from './logos/oldSpiceLogo.png';
import schaumaLogo from './logos/schaumaLogo.png';

export const BrandSection = () => {
  return (
    <div className={styles.section}>
      <div className={container.container}>
        <a href={'https://'}><img src={niveaLogo} alt={'nivea-logo'}/></a>
        <a href={'https://'}><img src={syossLogo} alt={'syoss-logo'}/></a>
        <a href={'https://'}><img src={oldSpiceLogo} alt={'oldSpice-logo'}/></a>
        <a href={'https://'}><img src={schaumaLogo} alt={'schauma-logo'}/></a>
      </div>
    </div>
  );
};
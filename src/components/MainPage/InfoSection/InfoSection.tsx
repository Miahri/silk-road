import React from 'react';
import styles from './InfoSection.module.css';
import card from '../../../common/styles/Card.module.css';
import container from '../../../common/styles/Container.module.css';
import wrapper from '../../../common/styles/Wrapper.module.css';
import button from '../../../common/styles/Button.module.css';
import syoss from './syoss.png';

export const InfoSection = () => {
  return (
    <div className={container.section}>
      <div className={container.container}>
        <div className={`${card.infoBlock} ${styles.introduction}`}>
          <span>НОВИНКИ</span>
          <h1>БАЛЬЗАМ SYOSS PURE BOUNCE</h1>
          <p>Серия Syoss Bounce Воздушный объем и упругость, разработанная специально для тонких волос, подходит для ежедневного пользования</p>
          <button className={button.button}>Написать менеджеру</button>
        </div>
        <div className={wrapper.productImg}>
          <img src={syoss} alt="productPhoto"/>
        </div>
      </div>
    </div>
  );
};
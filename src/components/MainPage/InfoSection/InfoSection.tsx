import React, {useEffect, useState} from 'react';
import styles from './InfoSection.module.css';
import container from '../../../common/styles/Container.module.css';
import wrapper from '../../../common/styles/Wrapper.module.css';
import button from '../../../common/styles/Button.module.css';
import syoss from './images/syoss.png';

export const InfoSection = () => {
  const [showExternalImg, setShowExternalImg] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px), (min-width: 769px) and (max-width: 1024px)');

    const handleResize = () => {
      setShowExternalImg(mediaQuery.matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={container.section}>
      <div className={container.container}>
        <div className={styles.introduction}>
          <span>НОВИНКИ</span>
          <h1>БАЛЬЗАМ SYOSS PURE BOUNCE</h1>
          {showExternalImg && <img src={syoss} alt="productPhoto" className={wrapper.productImg}/>}
          <p>Серия Syoss Bounce Воздушный объем и упругость, разработанная специально для тонких волос, подходит для ежедневного пользования</p>
          <button className={button.button}>Написать менеджеру</button>
        </div>
        {!showExternalImg && <img src={syoss} alt="productPhoto" className={wrapper.productImg}/>}
      </div>
    </div>
  );
};
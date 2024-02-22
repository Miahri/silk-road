import React from 'react';
import './App.css';
import {MainPage} from "./components/MainPage/MainPage";
import {Footer} from "./common/components/Footer/Footer";
import {ProductPage, ProductType} from "./components/ProductPage/ProductPage";
import {v1} from "uuid";
import syossPure from './components/ProductPage/syossPure.png';
import {NoveltyPage} from "./components/NoveltyPage/NoveltyPage";
import {Route, Routes} from 'react-router-dom';
import {CatalogPage} from "./components/CatalogPage/CatalogPage";
import Error404 from "./components/Error404/Error404";
import {Layout} from "./common/components/layout/Layout";

const product: ProductType = {
  id: v1(),
  name: 'Syoss Шампунь мицеллярный Pure Bounce, для тонких волос, 500мл',
  photo: syossPure,
  description: `Эффективно очищает волосы и кожу головы, придает волосам упругость и воздушный объем от Syoss, 
  подходит для ежедневного пользования`,
  composition: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor 
  exercitationem quod tempora.`,
  application: `Нанести на влажные волосы, затем смойте. Хранить при температуре от +5 до +25 С. Избегать попадания
  в глаза. При попадании промыть водой`,
  amount: 500,
  cost: '570 $ / 500мл',
  properties: [
    {id: v1(), name: 'Тип', value: 'Шампунь для волос'},
    {id: v1(), name: 'Страна изготовитель', value: 'Россия'},
    {id: v1(), name: 'Эффект', value: 'Объем'},
    {id: v1(), name: 'Упаковка', value: 'Флакон'},
    {id: v1(), name: 'Пол', value: 'Женский'},
    {id: v1(), name: 'Тип волос', value: 'Тонкие, Для всех типов волос'},
    {id: v1(), name: 'Единиц в одном товаре', value: '1'},
    {id: v1(), name: 'Особенности состава', value: 'Без красителей. Без спирта. Проверено дермотологами'},
    {id: v1(), name: 'Объем, мл', value: '500'},
    {id: v1(), name: 'Вес, г', value: '500'},
  ]
}


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/new-products'} element={<NoveltyPage styles={''}/>}/>
          <Route path={'/catalog'} element={<CatalogPage/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Layout>
      {/*<ProductPage product={product}/>*/}
      <Footer/>
    </div>
  );
}

export default App;

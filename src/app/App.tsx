import React from 'react';
import './App.css';
import {MainPage} from "../components/MainPage/MainPage";
import {Footer} from "../common/components/Footer/Footer";
import {ProductPage} from "../features/Products/ProductPage/ProductPage";
import {NoveltyPage} from "../features/Novelty/NoveltyPage/NoveltyPage";
import {Route, Routes} from 'react-router-dom';
import Error404 from "../components/Error404/Error404";
import {Layout} from "../common/components/Layout/Layout";
import {selectStatus} from "../features/Application/selectors";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {CatalogWrapper} from "../features/Catalog/CatalogWrapper";
import {ProductsList} from "../features/Products/ProductsList";
import {NoveltyWrapper} from "../features/Novelty/NoveltyWrapper";

function App() {
  const status = useSelector(selectStatus);

  return (
    <div>
      <Layout>
        {status === 'loading' && <LinearProgress />}
        <Routes>
          <Route path={'/'} element={<MainPage />}/>
          <Route path={'/new-products'} element={<NoveltyWrapper section={false} />}/>
          <Route path={'/catalog'} element={<CatalogWrapper section={false} />}/>
          <Route path={'/catalog/:catalogItemId/products'} element={<ProductsList />}/>
          <Route path={'/catalog/:catalogItemId/products/:productId'} element={<ProductPage /> }/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;

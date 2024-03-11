import thunkMiddleware from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import {catalogReducer} from "../features/Catalog";
import {appReducer} from "../features/Application";
import {productsReducer} from "../features/Products";
import {noveltiesReducer} from "../features/Novelty";
// непосредственно создаём store
//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    products: productsReducer,
    novelties: noveltiesReducer,
    app: appReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store


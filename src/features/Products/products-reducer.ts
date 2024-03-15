import { createSlice } from "@reduxjs/toolkit";
import { appActions } from "../CommonActions/App";
import { asyncActions as asyncCatalogActions } from "../Catalog/catalog-reducer";
import {thunkTryCatch} from "../../utils/thunkTryCatch";
import {createAppAsyncThunk} from "../../utils/createAppAsyncThunk";
import {productsAPI} from "../../api/products-api";
import {ProductType} from "../../api/types";

const {setAppStatus} = appActions;

const initialState: ProductsStateType = {};

export const fetchProductsTC = createAppAsyncThunk<{ products: ProductType[], catalogItemId: string },
  string>("products/fetchProducts",
  async (catalogItemId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await productsAPI.getProducts(catalogItemId);
      dispatch(setAppStatus({ status: "succeeded" }));
      return { products: res.data[catalogItemId], catalogItemId };
    });
  });

export const asyncActions = {
  fetchProductsTC
};

export const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncCatalogActions.fetchCatalogTC.fulfilled, (state, action) => {
        action.payload.catalog.forEach((ct: any) => {
          state[ct.id] = [];
        });
      })
      .addCase(fetchProductsTC.fulfilled, (state, action) => {
        state[action.payload.catalogItemId] = action.payload.products;
      })
  }
});

// types
export type ProductsStateType = {
  [key: string]: Array<ProductType>
}


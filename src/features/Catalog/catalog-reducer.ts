import {createSlice} from "@reduxjs/toolkit";
import {CatalogItemsType} from "../../api/types";
import {thunkTryCatch} from "../../utils/thunkTryCatch";
import {createAppAsyncThunk} from "../../utils/createAppAsyncThunk";
import {appActions} from "../CommonActions/App";
import {productsAPI} from "../../api/products-api";

const {setAppStatus} = appActions;

const fetchCatalogTC = createAppAsyncThunk<{ catalog: CatalogItemsType[] }, undefined>(
  "catalog/fetchCatalogItems", async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await productsAPI.getCatalogItems();
      dispatch(setAppStatus({ status: "succeeded" }));
      return { catalog: res.data };
    });
  });

export const asyncActions = {
  fetchCatalogTC
};

export const slice = createSlice({
  name: "catalogItems",
  initialState: [] as Array<CatalogItemsType>,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCatalogTC.fulfilled, (state, action) => {
        return action.payload.catalog.map((ctItems: CatalogItemsType) => ({...ctItems}))
      })
  }
});


import {createSlice} from "@reduxjs/toolkit";
import {CatalogItemsType} from "../../api/types";
import {thunkTryCatch} from "../../utils/thunkTryCatch";
import {createAppAsyncThunk} from "../../utils/createAppAsyncThunk";
import {appActions} from "../CommonActions/App";
import {productsAPI} from "../../api/products-api";
/*
const {setAppStatus} = appActions;

const fetchCatalogTC = createAppAsyncThunk<>();

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
        return action.payload.catalogItems.map((ct) => ({ ...ct}));
      })
  }
});
*/

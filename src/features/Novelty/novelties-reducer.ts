import {createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../../api/types";
import {thunkTryCatch} from "../../utils/thunkTryCatch";
import {createAppAsyncThunk} from "../../utils/createAppAsyncThunk";
import {appActions} from "../CommonActions/App";
import {productsAPI} from "../../api/products-api";

const {setAppStatus} = appActions;

const fetchNoveltiesTC = createAppAsyncThunk<{ novelties: ProductType[] }, undefined>(
  "novelty/fetchNovelties", async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await productsAPI.getNoveltyItems();
      dispatch(setAppStatus({ status: "succeeded" }));
      return { novelties: res.data };
    });
  });

export const asyncActions = {
  fetchNoveltiesTC
};

export const slice = createSlice({
  name: "catalogItems",
  initialState: [] as Array<ProductType>,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNoveltiesTC.fulfilled, (state, action) => {
        return action.payload.novelties.map((newProd) => ({...newProd}))
      })
  }
});

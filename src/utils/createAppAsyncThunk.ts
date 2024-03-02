import {ResponseType} from "../api/types"
import { createAsyncThunk } from "@reduxjs/toolkit";
import {AppDispatchType, AppRootStateType} from "./types";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootStateType;
  dispatch: AppDispatchType;
  rejectValue: null | ResponseType;
}>()
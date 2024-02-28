import axios from 'axios'
import {CatalogItemsType, ProductType} from "./types";

const instance = axios.create({
  baseURL: '../data/'
})

// api
export const productsAPI = {
  getCatalogItems() {
    return instance.get<CatalogItemsType>('catalogItems.json');
  },
  getProducts(catalogItemId: string) {
    return instance.get<ProductType[]>('products.json');
  }
}



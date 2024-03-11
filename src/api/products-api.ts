import axios from 'axios'
import {CatalogItemsType, ProductType} from "./types";

const instance = axios.create({
  baseURL: 'data/'
})

// api
export const productsAPI = {
  getCatalogItems() {
    return instance.get<CatalogItemsType[]>('catalog.json');
  },
  getProducts(catalogItemId: string) {
    return instance.get('products.json');
  },
  getNoveltyItems() {
    return instance.get<ProductType[]>('novelties.json');
  },
}



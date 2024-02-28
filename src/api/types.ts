export type PropertyType = {
  id: string
  name: string
  value: string
}

export type ProductType = {
  id: string
  name: string
  photo: any
  description: string
  composition: string
  application: string
  amount: number
  cost: string
  properties: PropertyType[]
}

export type CatalogItemsType = {
  id: string
  name: string
  photo: any
}

export type FieldErrorType = { field: string; error: string }

export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  fieldsErrors?: Array<FieldErrorType>
  data: D
}
import { Product } from "../models/product"
import { productsActionTypes } from "./actiontypes"
import { ProductsActionType } from "./reduxtypes"

export const initiateRequestActionCreator = (): ProductsActionType => {
    return {
        type: productsActionTypes.INITIATE_REQUEST
    }
}
export const successActionCreator = (value: Product[]): ProductsActionType => {
    return {
        type: productsActionTypes.FETCH_SUCCESS,
        payload: value
    }
}
export const failureActionCreator = (value: string): ProductsActionType => {
    return {
        type: productsActionTypes.FETCH_FAILURE,
        payload: value
    }
}
import { Product } from "../models/product"
import { productsActionTypes } from "./actiontypes"
import { ProductsActionType, ProductsStateType } from "./reduxtypes"

const initialProductsState: ProductsStateType = {
    isRequestComplete: false,
    errorMessage: '',
    products: undefined
}

export const productsReducer = (
    state = initialProductsState,
    action: ProductsActionType
): ProductsStateType => {
    switch (action.type) {
        case productsActionTypes.INITIATE_REQUEST:
            return {
                ...state,
                isRequestComplete: false,
                products: undefined,
                errorMessage: ''
            }


        case productsActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                isRequestComplete: true,
                products: action.payload as Product[],
                errorMessage: ''
            }

        case productsActionTypes.FETCH_FAILURE:
            return {
                ...state,
                isRequestComplete: false,
                products: undefined,
                errorMessage: action.payload as string
            }

        default:
            return state
    }
}
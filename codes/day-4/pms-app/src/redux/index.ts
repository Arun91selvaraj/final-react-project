import { applyMiddleware, legacy_createStore } from "redux";
import { createLogger } from "redux-logger";
import { Product } from "../models/product";

export interface ProductsStateType {
    isRequestComplete: boolean;
    errorMessage: string;
    products: Product[] | undefined;
}
export interface ProductsActionType {
    type: string;
    payload?: Product[] | undefined | string;
}
export const productsActionTypes = {
    INITIATE_REQUEST: 'INITIATE_REQUEST',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE'
}

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

const loggerMiddleware = createLogger()
export const appStore = legacy_createStore(
    productsReducer,
    applyMiddleware(loggerMiddleware)
)
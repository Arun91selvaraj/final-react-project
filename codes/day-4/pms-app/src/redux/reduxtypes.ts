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
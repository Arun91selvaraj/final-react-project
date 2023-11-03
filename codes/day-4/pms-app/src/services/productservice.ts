import axios from "axios";
import { ApiResponse } from "../models/apiresponse";
import { Product } from "../models/product";

const url = 'http://localhost:3003/products'
export function getProducts() {
    return axios.get<ApiResponse<Product[]>>(url)
}
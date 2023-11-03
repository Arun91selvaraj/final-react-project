import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/common/home/Home'
import ProductList from '../components/products/product-list/ProductList'
import AddProduct from '../components/products/add-product/AddProduct'
import PageNotFound from '../components/common/page-not-found/PageNotFound'
import ProductInfo from '../components/products/product-info/ProductInfo'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='' element={<Home />} />
            <Route path='products' element={<ProductList />} />
            <Route path='products/:id' element={<ProductInfo />} />
            <Route path='products/add' element={<AddProduct />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes
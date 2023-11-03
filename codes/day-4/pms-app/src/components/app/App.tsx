import AppRoutes from '../../routes/AppRoutes';
import DashBoard from '../common/dashboard/DashBoard';
import Home from '../common/home/Home';
import PageNotFound from '../common/page-not-found/PageNotFound';
import AddProduct from '../products/add-product/AddProduct';
import ProductList from '../products/product-list/ProductList';
import './App.css';

import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <DashBoard />
      <br />
      <div className='container'>
        <Outlet />
      </div>
      <AppRoutes />
    </div>
  );
}

export default App;

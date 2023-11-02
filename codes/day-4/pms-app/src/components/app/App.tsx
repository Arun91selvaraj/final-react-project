import DashBoard from '../common/dashboard/DashBoard';
import ProductList from '../products/product-list/ProductList';
import './App.css';

function App() {
  return (
    <div>
      <DashBoard />
      <br />
      <div className='container'>
        <ProductList />
      </div>
    </div>
  );
}

export default App;

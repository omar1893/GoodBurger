import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import { OrderList } from './pages/OrdersList';
import { CreateOrder } from './pages/CreateOrder';
import { Navbar } from './components/Navbar';

function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route caseSensitive path="/" element={<ProductList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/create-order" element={<CreateOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
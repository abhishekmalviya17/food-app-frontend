import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import Settings from './containers/Settings';
import Home from './components/Home';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import { setAuthToken } from './utils/setAuthToken';
import { SnackbarProvider } from './context/SnackbarContext';
import MenuItemsPage from './components/MenuItemsPage';
import CartPage from './components/CartPage';
import OrdersPage from './components/OrdersPage';

const storedUser = JSON.parse(localStorage.getItem('user'));
if (storedUser && storedUser.token) {
  setAuthToken(storedUser.token);
} else {
  if(!window.location.pathname === '/login'){
    window.location.href='/login'
  }
 
}


console.log('env',process.env.NODE_ENV )

function App() {
  return (
  <Provider store={store}>
     <SnackbarProvider>
      <Router>
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path='/home' element={<PrivateRoute element={Home} />} />
          <Route path='/' element={<PrivateRoute element={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/restaurants' element={<PrivateRoute element={Home} />} />
          <Route path='/deals' element={<PrivateRoute element={Home} />} />
          <Route path="/restaurants/:restaurantId" element={<PrivateRoute element={MenuItemsPage} />} />
          <Route path='/cart' element={<PrivateRoute element={CartPage} />} />
          <Route path='/orders' element={<PrivateRoute element={OrdersPage} />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  </Provider>
  );
}

export default App;

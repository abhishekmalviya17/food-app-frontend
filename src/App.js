import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoute from './components/PrivateRoute';
import { setAuthToken } from './utils/setAuthToken';
import { SnackbarProvider } from './context/SnackbarContext';
import Loader from './components/common/Loader';
// Lazy loaded components
const Login = lazy(() => import('./components/Login'));
const Settings = lazy(() => import('./containers/Settings'));
const Home = lazy(() => import('./components/Home'));
const Signup = lazy(() => import('./components/Signup'));
const MenuItemsPage = lazy(() => import('./components/MenuItemsPage'));
const CartPage = lazy(() => import('./components/CartPage'));
const OrdersPage = lazy(() => import('./components/OrdersPage'));
const Logout = lazy(() => import('./components/Logout'));

const App = () => {
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.token) {
      setAuthToken(storedUser.token);
    } else {
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
  }, []);

  console.log('env', process.env.NODE_ENV);

  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Router>
          <Suspense fallback={<Loader />}>
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
              <Route path='/logout' element={<Logout />} />
            </Routes>
          </Suspense>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;

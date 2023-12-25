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


const storedUser = JSON.parse(localStorage.getItem('user'));
if (storedUser && storedUser.token) {
  setAuthToken(storedUser.token);
} else {
  if(!window.location.pathname === '/login'){
    window.location.href='/login'
  }
 
}

function App() {
  return (
  <Provider store={store}>
     <SnackbarProvider>
      <Router>
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path='/home' element={<PrivateRoute element={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/restaurants' element={<PrivateRoute element={Home} />} />
          <Route path='/deals' element={<PrivateRoute element={Home} />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  </Provider>
  );
}

export default App;

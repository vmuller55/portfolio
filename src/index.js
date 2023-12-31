import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='portfolio'>
        <Routes>
          <Route path='/' index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



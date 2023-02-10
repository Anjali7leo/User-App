import React from 'react';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Users from './Component/Users';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return <>
        <Provider store={store}>
        <Router>
          <Navbar/>
          <Routes>

            <Route path='product' element = {<Product/>}/>
            <Route path='user' element = {<Users/>}/>
            
          </Routes>
        </Router>
        </Provider>
  </>}
    


export default App;

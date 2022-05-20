import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Header from './Shared/Header';

const App = () => {
  return (
    <>
      <Header/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    <button className='my-3 bg-red-500 text-white py-3 px-6 rounded'>red</button>
    </>
  );
};

export default App;
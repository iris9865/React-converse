import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import ProductAll from './Component/ProductAll';
import Login from './Component/Login';
import PrivateRouter from './Component/PrivateRouter';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("Login", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />}  />
      </Routes>
    </div>
  );
}

export default App;

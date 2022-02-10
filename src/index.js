import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import AllReports from './Pages/AllReports.js';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home />} />
        <Route path="AllReports" element={<AllReports />} />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
    </div>
    <Footer />
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

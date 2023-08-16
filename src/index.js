import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// Cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import ReactForm from './pages/ReactForm/ReactForm';
import Page404 from './pages/Page404/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App/>
  // react-router-dom
  <BrowserRouter>
    <Routes>
      {/* path='' đường dẫn mặc định đến component -> element={}*/}
      <Route path='' element={<App></App>}>

        {/* Outlet : vị trí component sẽ được load ở link con, index mặc định là trang chủ */}
        {/* Cách 1: <Route path='' element={<Home/>}></Route> */}
        <Route index element={<Home />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='reactform' element={<ReactForm />}></Route>
        {/* Cách 1: tạo 1 trang 404  */}
        {/* <Route path='*' element={<Page404/>}></Route> */}
        {/* Cách 2: Dùng Navigate -> về trang chủ */}
        <Route path='*' element={<Navigate to="" />}></Route>

      </Route>

      {/* <Route path='contact' element={<Contact></Contact>}>
          Cách 1:
      </Route> */}
    </Routes>
  </BrowserRouter>
);



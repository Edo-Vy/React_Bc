import logo from './logo.svg';
import './App.css';
import DemoFuncCom from './Components/DemoFunCom/DemoFuncCom';
import DemoClassCom from './Components/DemoFunCom/DemoClassCom';
import DataBiding from './DataBiding/DataBiding';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import HandleEvent from './Components/HandleEvent/HandleEvent';
import StyleWithJSX from './Components/StyleWithJSX/StyleWithJSX';
import StateDemo from './Components/StateDemo/StateDemo/StateDemo';
import BaiTapChonXe from './Components/StateDemo/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './Components/RenderWithMap/RenderWithMap';
import LayoutFilm from './Components/RenderWithMap/LayoutFilm';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesShop from './Props/ShoesShop/ShoesShop';
import DemoXemChiTiet from './Props/DemoXemChiTiet/DemoXemChiTiet';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* <BaiTapLayout></BaiTapLayout> */}
      {/* <DemoFuncCom />
      <div className='w-25'>
        <DemoClassCom></DemoClassCom>
      </div> */}
      {/* <DataBiding></DataBiding> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <StyleWithJSX></StyleWithJSX> */}
      {/* <StateDemo></StateDemo> */}
      {/* <RenderWithMap></RenderWithMap> */}
      {/* <LayoutFilm></LayoutFilm> */}
      {/* <DemoProps></DemoProps> */}
      {/* <ShoesShop></ShoesShop> */}
      {/* <DemoXemChiTiet></DemoXemChiTiet> */}
      {/* <ExerciseCarStore></ExerciseCarStore> */}

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Cyber Soft</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
            </li>
            {/*Callbackfun -> className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} */}
            <li className="nav-item">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/reactform">React Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/lifecycle">React LifeCycle</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/reduxNumber">Demo Number</NavLink>
                <NavLink className="dropdown-item" to="/reduxChonXe">Demo Chọn Xe</NavLink>
                <NavLink className="dropdown-item" to="/reduxComment">Demo Comment</NavLink>
                <NavLink className="dropdown-item" to="/reduxBurger">Demo Burger</NavLink>
                
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Outlet : vị trí component sẽ được load ở link con */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;

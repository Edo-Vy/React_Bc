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
      <LayoutFilm></LayoutFilm>
   
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DemoFuncCom from './Components/DemoFunCom/DemoFuncCom';
import DemoClassCom from './Components/DemoFunCom/DemoClassCom';
import DataBiding from './DataBiding/DataBiding';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';

function App() {
  return (
    <div className="App">
      <BaiTapLayout></BaiTapLayout>
      {/* <DemoFuncCom />
      <div className='w-25'>
        <DemoClassCom></DemoClassCom>
      </div> */}
      <DataBiding></DataBiding>
    </div>
  );
}

export default App;

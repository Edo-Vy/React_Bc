import logo from './logo.svg';
import './App.css';
import DemoFuncCom from './Components/DemoFunCom/DemoFuncCom';
import DemoClassCom from './Components/DemoFunCom/DemoClassCom';
import DataBiding from './DataBiding/DataBiding';

function App() {
  return (
    <div className="App">
      {/* <DemoFuncCom />
      <div className='w-25'>
        <DemoClassCom></DemoClassCom>
      </div> */}
      <DataBiding></DataBiding>
    </div>
  );
}

export default App;

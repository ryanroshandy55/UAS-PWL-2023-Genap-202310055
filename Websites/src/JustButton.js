// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sidebar from './layout/component/sidebar/Sidebar';


function App() {
  const [number, setNumber] = useState (0);
  
  function minus() {
    number = number - 1;
    setNumber(number);
};
  function plus() { 
    number = number + 1;
    setNumber(number);
  };

const plus = () => {
  setNumber(number+1);
};
const minus = () => {
  setNumber(number-1);
};

  return (
    <>
      <div className="App" style={{fontFamily:'montserrat'}}>
        <div>
          <Sidebar />
        </div>
        <div style={{backgroundColor:'black', width:'100vw'}}>

        </div>
      </div>
    </>
  );
}


export default App;

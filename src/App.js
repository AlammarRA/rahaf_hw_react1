import { useState } from "react";
import "./App.css"


const App = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const addition = (number) => {
    setResult(parseInt(firstNumber) + parseInt(secondNumber));
  }

  const subtract = (number) => {
    setResult(parseInt(firstNumber) - parseInt(secondNumber));
  }

  const multiply = (number) => {
    setResult(parseInt(firstNumber) * parseInt(secondNumber));
  }

  const divide = (number) => {
    setResult(parseInt(firstNumber) / parseInt(secondNumber));
  }

  const reminder = (number) => {
    setResult(parseInt(firstNumber) % parseInt(secondNumber));
  }
  
 return(
  <>
  <div className="p-5 mb-2 bg-dark text-dark"></div>
  <h1 className=" mt-5 mb-5 text-dark text-center">Calculator</h1>
  <div className="container px-4 mb-5">
  <div className="row gx-5">
  <div className="col">
        <div className="p-1 border bg-dark">
        <input  value={firstNumber} 
                onChange={(number) => setFirstNumber(number.target.value)} 
                type="number" 
                className="form-control text-center" 
                id="first" 
                placeholder="The first number"/>
        </div>
        </div>

        <div className="col">
        <div className="p-1 border bg-dark">
        <input value={secondNumber} 
                onChange={(number) => setSecondNumber(number.target.value)} 
                type="number" 
                className="form-control text-center" 
                id="secund" 
                placeholder="The second number"/>
         </div>
        </div>
  </div>

<div className="text-center">
        <button onClick={addition} type="button" className="btn pl-5 pr-5 m-2 mb-5 mt-5 btn-dark btn-lg"> + </button>
        <button onClick={subtract} type="button" className="btn pl-5 pr-5 m-2 mb-5 mt-5 btn-dark btn-lg"> - </button>
        <button onClick={multiply} type="button" className="btn pl-5 pr-5 m-2 mb-5 mt-5 btn-dark btn-lg"> * </button>
        <button onClick={divide} type="button" className="btn pl-5 pr-5 m-2 mb-5 mt-5 btn-dark btn-lg"> / </button>
        <button onClick={reminder} type="button" className="btn pl-5 pr-5 m-2 mb-5 mt-5 btn-dark btn-lg"> % </button> 
  </div>

  <div className="col">
     <div className="p-2 border border-dark bg-light text-center text-dark"> 
     {result}
     </div>
    </div>

</div>
</>

);
}

export default App;

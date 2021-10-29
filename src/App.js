import './App.css';

function random_sum(){
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  return (
    <div>
      <p>1st random number is: {num1}</p>
      <p>2nd random number is: {num2}</p>
      <p>The sum of {num1} and {num2} is {num1+num2}</p>
    </div>
  )
}

export function sum(a,b){
  return a+b
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          HELLO, THIS IS TEAM 8!
        </p>
      </header>
      <p className="random">{random_sum()}</p>
    </div>
  );
}

export default App;
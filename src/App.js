import './App.css';

import Header from './components/Header';

function App() {
  
  return (
    <div className="App">
      <Header 
        title="Hello World"
        myArr={[0,2,3]}
        myFunc={(a, b) => a + b}
        myObj={{
          a: 5,
          b: 1
        }}/>
        
      {/* <Header title="Hello World 2" num={5}/> */}
    </div>
  );
}

export default App;

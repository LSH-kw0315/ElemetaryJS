import React,{Component,useState} from 'react'; 
import './App.css';
import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot';



function App() {
  const [number,setNumber]=useState(0);
  console.log('App');
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot onClick={(size)=>{setNumber(number+size);}}></AddNumberRoot>
      <DisplayNumberRoot number={number}></DisplayNumberRoot>
    </div>
  );
}

export default App;

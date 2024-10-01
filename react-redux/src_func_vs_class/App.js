import { Component, useState, useEffect,memo } from 'react';
import './App.css';
let func_style="color:blue";
const FuncComp=memo(function (props){
  const [number,setNumber]=useState(props.initNumber)
  const [date,setDate]=useState(new Date().toString())

  useEffect(()=>{
    console.log("%conly called mount",func_style);
    return ()=>{
      console.log("%conly called unmount",func_style);
    }
  },[])

  useEffect(function(){
    document.title="date clicked:"+date
    console.log('%cuseEffect date',func_style);
    return function(){
      console.log("%creturnofuseEffect date",func_style)
    }
  },[date]);
  useEffect(function(){
    document.title="number clicked:"+number
    console.log('%cuseEffect num',func_style);
    return function(){
      console.log("%creturnofuseEffect num",func_style)
    }
  },[number]);


  console.log('%crender',func_style);
  return(
    <div 
    className='container'
    >
      <h2>Function Style</h2>
      <p>Number : {number} </p>
      <p>Date : {date}</p>
      <input type="button" value="random" onClick={()=>(setNumber(Math.random()))}></input>
      <input type="button" value="date" onClick={()=>(setDate(new Date().toString()))}></input>
    </div>
  );
})
class ClassComp extends Component{
  constructor(props){
    let classStyle="color:red";
    console.log("%cconstructor",classStyle);
    super(props)
    this.state={
      number:this.props.initNumber,
      date:new Date().toString(),
    }
  }
  static getDerivedStateFromProps(props,state){
    let classStyle="color:red";
    console.log('%cgetDerivedStateFromProps',classStyle);
    return null;
  };
  shouldComponentUpdate(props,state){
    let classStyle="color:red";
    console.log("%cshouldComponentUpdate",classStyle);
    if(state.number !== this.state.number || state.date !== this.state.date){
      return true;
    }else{
      return false;
    }
  }
  componentDidMount(){
    let classStyle="color:red";
    console.log("%cdidmount",classStyle);
  }
  componentDidUpdate(prevProps,prevState){
    let classStyle="color:red";
    if(prevState.number!==this.state.number){
        console.log("%cnumber is change",classStyle);
    }
    if(prevState.date!==this.state.date){
        console.log("%cdate is change",classStyle);
    }
    console.log("%cdidupdate",classStyle);
  }
  componentWillUnmount(){
    let classStyle="color:red";
    console.log("%cunmount",classStyle);
  }
  render(){
    let classStyle="color:red";
    console.log("%crender",classStyle);
    return(
      <div className='container'>
        <h2>Class Style</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <p>immute : {this.state.immute}</p>
        <input type='button' value='random' onClick={()=>{this.setState({...this.state,number:Math.random()})}}></input>
        <input type='button' value='date' onClick={()=>{this.setState({...this.state,date:new Date().toString()})}}></input>
      </div>
    );
  }
}

function App() {
  const [visible_func,setVisible_Func]=useState(true);
  const [visible_class,setVisible_Class]=useState(true);
  return (
    <div className="container">
      <h1>Hello world</h1>
      <input type="button" value="filp func" onClick={()=>setVisible_Func(visible_func?false:true)}></input>
      <input type="button" value="filp class" onClick={()=>setVisible_Class(visible_class?false:true)}></input>
      {visible_func?<FuncComp initNumber={2}></FuncComp>:null}
      {visible_class?<ClassComp initNumber={2}></ClassComp>:null}
    </div>
  );
}

export default App;

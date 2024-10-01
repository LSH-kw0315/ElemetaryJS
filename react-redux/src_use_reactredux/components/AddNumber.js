import { Component, useState } from "react";
export default function AddNumber(props){
    const [size,setSize]=useState(1);
    console.log('Ad');
    return(
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={()=>{props.onClick(size);}}></input>
        <input type="text" value={size} onChange={(e)=>{
            const val=Number(e.target.value);
            if(Number.isFinite(val)){
                setSize(Number(e.target.value));
            }
            }}></input>
      </div>
    );
  }
  /*
class Addnumber extends Component{
  constructor(props){
    super(props)
    this.state={size:1}
  }
  render(){
    return(
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={()=>{this.props.onClick(this.state.size);}}></input>
        <input type="text" value={this.state.size} onChange={(e)=>{
            const val=Number(e.target.value);
            if(Number.isFinite(val)){
                this.setState({size:Number(e.target.value)})
            }
            }}></input>
      </div>
    );
  }
}
export default Addnumber
*/
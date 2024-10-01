import { Component } from "react";
/*
export default function DisplayNumber(props){
    return(
      <div>
        <h1>Display Number</h1>
        <input type="text" value={props.number} readOnly></input>
      </div>
    );
  }
  */
class DisplayNumber extends Component{
  render(){
    return(
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.props.number} readOnly></input>
      </div>
    );
  }
}
export default DisplayNumber;
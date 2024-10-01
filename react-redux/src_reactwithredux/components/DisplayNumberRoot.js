import { Component } from "react";
import DisplayNumberContainer from "../containers/DisplayNumberContainer";
/*
export default function DisplayNumberRoot(){
    console.log('DP_root');
    return(
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumberContainer></DisplayNumberContainer>
      </div>
    );
  }*/
class DisplayNumberRoot extends Component{
  render(){
    return(
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumberContainer></DisplayNumberContainer>
      </div>
    );
  }
}
export default DisplayNumberRoot
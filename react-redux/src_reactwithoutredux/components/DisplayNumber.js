import { useState } from "react";
export default function DisplayNumber(props){
    console.log('DP');
    return(
      <div>
        <h1>Display Number</h1>
        <input type="text" value={props.number} readOnly></input>
      </div>
    );
  }
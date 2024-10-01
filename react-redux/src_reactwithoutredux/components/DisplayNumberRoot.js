import { useState } from "react";
import DisplayNumber from "./DisplayNumber";

export default function DisplayNumberRoot(props){
    console.log('DP_root');
    return(
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber number={props.number}></DisplayNumber>
      </div>
    );
  }
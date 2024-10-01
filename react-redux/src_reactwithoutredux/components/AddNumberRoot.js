import { useState } from "react";
import AddNumber from "./AddNumber";

export default function AddNumberRoot(props){
    console.log('AD_root');
    return(
      <div>
      <h1>
        Add Number Root
      </h1>
      <AddNumber onClick={(size)=>{
        props.onClick(size);
      }}></AddNumber>
      </div>
    );
  }
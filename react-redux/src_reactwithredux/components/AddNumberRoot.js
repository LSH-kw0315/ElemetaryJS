
import { Component } from "react";
import AddNumberContainer from "../containers/AddNumberContainer";

/*
export default function AddNumberRoot(){
    console.log('AD_root');
    return(
      <div>
      <h1>
        Add Number Root
      </h1>
      <AddNumberContainer></AddNumberContainer>
      </div>
    );
  }
*/
class AddNumberRoot extends Component{
  render(){
    return(
      <div>
      <h1>
        Add Number Root
      </h1>
      <AddNumberContainer></AddNumberContainer>
      </div>
    );
  }
}
export default AddNumberRoot;
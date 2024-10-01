import AddNumber from "../components/AddNumber";
import store from "../store";

export default function(){
    return(
        <AddNumber onClick={(size)=>{store.dispatch({type:'INCREMENT',size:size});}}></AddNumber>
    );
}
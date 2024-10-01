import AddNumber from "../components/AddNumber";
import { connect, Connect } from "react-redux";
const mapDispatchToProps=(dispatch)=>{return{onClick:(size)=>dispatch({type:'INCREMENT',size:size})}}
export default connect(null,mapDispatchToProps)(AddNumber)
/*
export default function(){
    return(
        <AddNumber onClick={(size)=>{store.dispatch({type:'INCREMENT',size:size});}}></AddNumber>
    );
}
*/

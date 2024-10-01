
import {Provider,useDispatch,useSelector} from "react-redux";
import store from './store';
import { UP,DOWN } from "./counterSlice";

/*
const reducer=(state,action)=>{
    if(action.type==='UP'){
        return {...state,value:state.value+action.step};
    }
    return state;
};
*/

/*
const INITALSTATE={value:0};
const store=createStore(reducer,INITALSTATE);
*/

const Counter=()=>
{
    const dispatch=useDispatch();
    const count=useSelector(state=>{
        console.log(state);
        return state.counter.value;});
    return (
        <div>
            <button onClick={()=>{
                console.log(UP);
                dispatch(UP(2));}}>+</button>
            <button onClick={()=>
            dispatch(DOWN(2))}>-</button>
            {count}
        </div>
    );
}

const App=()=>{
    return (
        <div>
            <Provider store={store}>
           <Counter></Counter>
           </Provider>  
        </div>
    );
}

export default App;
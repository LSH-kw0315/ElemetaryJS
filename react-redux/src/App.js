import {useReducer,useState} from 'react';
const App=()=>{
    const [number,setNumber]=useState(1);

    function countReducer(oldState,action){
        if(action.type==='DOWN'){
            return oldState+action.number;
        }
        else if(action.type==='UP'){
            return oldState-action.number;
        }
        else if(action.type==='RESET'){
            return action.number;
        }
    }
    const [count,countDispatch] = useReducer(countReducer,0);
    function down(){
        countDispatch({type:'DOWN',number:number});
    }
    function up(){
        countDispatch({type:'UP',number:number});
    }
    function zero(){
        countDispatch({type:'RESET',number:0});
    }

    function changeNumber(event){
        setNumber(Number(event.target.value));
        
    }

    return (
        <div>
            <input type="button" value="-" onClick={down}></input>
            <input type="button" value="0" onClick={zero}></input>
            <input type="button" value="+" onClick={up}></input>
            <input type="text" value={number} onChange={changeNumber}></input>
            <span>{count}</span>

        </div>
    );
}

export default App;
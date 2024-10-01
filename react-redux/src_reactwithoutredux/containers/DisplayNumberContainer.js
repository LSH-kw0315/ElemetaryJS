import DisplayNumber from "../components/DisplayNumber";
import {useState} from 'react';
import store from "../store";
import {connect} from "react-redux";
const mapStateToProps=(state)=>{return {number:state.number}}
export default connect(mapStateToProps)(DisplayNumber)
/*
export default function(){
    const [number,setNumber]=useState(store.getState().number);
    //store의 state의 number와 이 컴포넌트의 state의 number를 동기화시킨다.
    //리덕스만으로 뭔가를 할 수 없는 이유는, 결국 렌더링하는 건 리액트(JS)의 몫이기 때문이다. 
    store.subscribe(function(){
        setNumber(store.getState().number);
        console.log(connect()(DisplayNumber))
    })
    //리덕스를 되짚어보자.
    //subscribe는 store의 state가 변경되었을 때 실행하는 함수를 등록하는 함수다.
    //dispatch는 변경 사항이 담긴 action 객체를 받아서, reduce를 호출한다. 이 때 action 객체를 reduce에 넘겨준다.
    //또한, dispatch는 subscribe로 등록한 함수도 호출한다.
    //다시 말해, dispatch는 action 객체를 통해 reduce로 하여금 store의 state를 변화시키도록 한다.
    //따라서 dispatch의 호출은 store의 state의 변화이므로 dispatch가 subscribe에 등록된 함수를 호출하는 것이다.
    //그리고 reduce는 store가 기존에 가지고 있던 state와 dispatch가 넘겨준 action을 바탕으로 새로운 state 객체를 리턴한다.
    
    //위 흐름에 의해, store의 state가 바뀌면 이 컴포넌트의 state(리액트의 state)인 number를 변경하는 setNumber를 호출하도록 한다.
    //그리고 리액트의 동작원리에 의해 DisplayNumber 컴포넌트는 다시 렌더링되는 것이다.
    return(
        <DisplayNumber number={number}></DisplayNumber>
    );

}
*/
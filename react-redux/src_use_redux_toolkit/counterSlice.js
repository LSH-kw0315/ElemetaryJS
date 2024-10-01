import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice(
    {
    name:'counter',
    initialState:{value:0},
    reducers:{
        UP:(state,action)=>{
            state.value+=action.payload;
        },
        DOWN:(state,action)=>{
            state.value-=action.payload;
        }
    }
    }
);

export default counterSlice;
export const {UP}=counterSlice.actions;
export const {DOWN}=counterSlice.actions;
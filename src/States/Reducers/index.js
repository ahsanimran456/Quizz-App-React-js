import { createSlice } from "@reduxjs/toolkit";

export const Score  = createSlice({
    name : 'ScoreMangement',
    initialState: 0,
    reducers:{
        Inc: (state,action)=>{
            return state += 1
        }
    }
})
export const Name  = createSlice({
    name : 'Namemanagment',
    initialState:'',
    reducers:{
        Setname: (state,action)=>{
            return state = action.payload
        }
    }
})
const mangereducer = Score.reducer
const namereducer = Name.reducer
export const {Inc} = Score.actions;

export const {Setname} = Name.actions
export  {mangereducer,namereducer}
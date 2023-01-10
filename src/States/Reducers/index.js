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
const mangereducer = Score.reducer
export const {Inc} = Score.actions;
export  {mangereducer}
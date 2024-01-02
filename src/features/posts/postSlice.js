import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {
    id:'1',
    title:"A",
    content:"something"
    },
    {
    id:'2',
    title:"b",
    content:"Another something"
    }
]
const postSlice=createSlice({
  name:"posts",
  initialState,
  reducers:{
  postAdd:(state,action)=>{
   state.push(action.payload)
  }

  }
})
export const allPost=state=>state.posts
export const {postAdd} =postSlice.actions
export default postSlice.reducer

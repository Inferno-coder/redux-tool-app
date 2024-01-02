import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import { postAdd } from './postSlice'
import { nanoid } from '@reduxjs/toolkit'
export const Addpost = () => {
    const[title,setTitle]=useState("")
    const[content,setContent]=useState("")
    const dispatch=useDispatch()
    const handleSubmit=()=>{
        console.log(title,content);
       if(title && content){
        dispatch(postAdd(
         {
            id:nanoid(),
            title,
            content
         }
        ))
       }
       setTitle("")
       setContent("")
    }
  return (
    <div>
        <h1>Add post</h1>
        <form >
            <label >Title</label>
            <input 
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
             />
            <label >Content</label>
            <input 
            type="text"
            onChange={(e)=>setContent(e.target.value)}
            value={content}
             />
             <button type='button' onClick={handleSubmit}>Add Post</button>
        </form>
    </div>
  )
}

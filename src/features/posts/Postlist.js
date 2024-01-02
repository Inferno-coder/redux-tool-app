import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { allPost } from './postSlice'
export const Postlist = () => {
    const posts=useSelector(allPost)
    const dispatch=useDispatch()
     const renderedPost=posts.map((post)=>(
     <div key={post.id}>
        <h1>{post.title}</h1>
        <h4>{post.content}</h4>
     </div>
     ))
  return (
    <div>
        <h1>Posts</h1>
        {renderedPost}
    </div>
  )
}

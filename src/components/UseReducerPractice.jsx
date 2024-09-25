import React, { useReducer } from 'react'
import ReactMemo from './ReactMemo'

function UseReducerPractice() {
  const reducer = (state,action)=>{
    console.log(state, action)
    if(action.type==="increment"){
      return state + 1
    }
    if(action.type==="decrement"){
      return state - 1
    }
    if(action.type ==="reset"){
      return state = 0
    }
  }


  const [count, dispatch] = useReducer(reducer , 0)


  return (
    <div className='flex flex-col'>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <ReactMemo />
    </div>
  )
}

export default UseReducerPractice
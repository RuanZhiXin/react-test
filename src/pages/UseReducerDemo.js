import React,{useReducer} from 'react'

const UseReducerDemo = () => {
const reducer = (state, action) =>  {
 if(action.type === 'add') {
    return {
      ...state,
      count: state.count +1,
    }
  } else {
   return state
  }
 }
const addcount = () => { 
  dispatch({
    type: 'add11'
  })
}
const [state, dispatch] = useReducer(reducer, {count: 0})
return (
    <>
      <p>{state.count}</p>
      <button onClick={addcount}>count++</button>
    </>
  )
}
export default UseReducerDemo;

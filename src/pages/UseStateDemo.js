import React, {useState} from 'react';
// class UseStateDemo extends React.PureComponent {
//   constructor(props){
//     super(props)
//     this.state={
//       count: 0
//     }
//   }
//   addcount = () => {
//     let newCount = this.state.count
//     this.setState({
//       count: newCount +=1
//   })
//   }
//   render(){
//     return (
//       <>
//         <p>{this.state.count}</p>
//         <button onClick={this.addcount}>count++</button>
//       </>
//     )
//   }
// }

const UseStateDemo = () => {
  const [ count, setCount ] = useState(0)
  const addcount = () => {
    let newCount = count
    setCount(newCount+=1)
  } 
  return (
    <>
      <p>{count}</p>
      <button onClick={addcount}>count++</button>
    </>
  )
};

export default UseStateDemo;

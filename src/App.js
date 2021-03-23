import React,{Component} from 'react'
import './App.css';

class App extends Component
{
  constructor(){
    super();
    this.state= {
      value : 0 ,
      data : []
    } 
    //First Run Contructor Life Cycle
    console.log("Constructor");
  }

  // static getDerivedStateFromProps(props,state){
  //   console.log("Get Derived State From Props == >",state) 
  //   return null 
  // }


  Increment  = () =>{
    this.setState({
     value : this.state.value + 1 
    })
  }

  Decrement  = () =>{
    this.setState({
     value : this.state.value - 1 
    })
  }
  
componentDidMount(){
  // console.log("componentDidMount")
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(data => console.log(data))

  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(
    data =>   this.setState({
      data : data
    })
  )
}

// shouldComponentUpdate(){
//   return false
// }

// getSnapshotBeforeUpdate(preprops,prestate){
//   console.log("Old Value :",prestate)
//   return 10
// }

// componentDidUpdate(postprops,poststate,get){
//   console.log("New Value",get)
// }

// componentWillUnmount(){
//   console.log("components End")
// }


  
  render(){
    // console.log("data==>",this.state.data)
    // console.log("Render")
    // this.setState({
    //   value : 'dtat'
    // })
  return (
    <div className="App">

      {/* <ul>
        {this.state.data.map((v,i)=>{
          return ( 
            <li key={i}>{v.title}</li>
          )
        })}
      </ul> */}
      {this.state.value < 5 && <h1>{this.state.value}</h1> }
      {/* <h1>{this.state.value}</h1> */}
      <button onClick={()=>{this.Increment()}}>Increment</button>
      <button onClick={()=>{this.Decrement()}}>Decrement</button>


    </div>
  );
}
  
}
export default App;

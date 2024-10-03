import React, { Component } from 'react'

export default class Button extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      count : 0 
   }
 }

 incremetHandle  =()=>{
    this.setState(
        {
           count : this.state.count +1 
        }
    )
 }  
  render() {
    const {count}=this.state
    return (
      <div>
        <h1>Count:{count}</h1>
        <button onClick={this.incremetHandle} disabled={count===5 ? true:false}> + </button>
      </div>
    )
  }
}

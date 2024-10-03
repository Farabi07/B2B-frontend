import React, { Component } from 'react'





 class Event extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changevalue : " "
      }
    }


    CnHandler =(e)=>{
        this.setState({
            changevalue : e.target.value
        },()=>{
            console.log(this.state.changevalue)
        }      
        )
        
    }
  render() {
    return (
      <div>
        <input type='text' onChange={this.CnHandler}/>
        <p>{this.state.changevalue}</p>
      </div>
    )
  }
}

export default Event

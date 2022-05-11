import React, { Component } from 'react'

export default class Time extends Component {

  constructor(props) {
      super(props);
      //1. Constructor set initial Value
      this.State = {
          time:new Date ()   
      }
  }

  tick = () => {
      this.setState({
          time:new Date()
      })
      console.log("Tick");
  }

  componentDidMount = () =>{
      //3.Use this Method for request data to server
      this.timeId = setInterval(()=>this.tick(),1000);
  }
  
  componentDidUpdate = (PrevProps,PrevState) => {
     if(PrevState.time !== this.State.time){
        //4.Call componentDidUpdate when previous state and current state is not same.
        console.log("componentDidUpdate called");
     }
  }

  componentWillUnmount = () => {
      //5.componentWillUnmount used to realse resources from component.
      clearInterval(this.timeId);
  }

  render() {
    //2.Call render method each time When State Value Change
    return (
      <div>
        {this.State.time.toLocaleTimeString()}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {IncrementCounter,DecrementCounter } from './CounterAction';
class CounterScreen extends Component {
  render() {
    return ( 
     <>
        <div> Welcome to Counter Screen </div> 
        <div>{this.props.counterValue}</div>
        <button onClick={()=>this.props.IncrementCounter(this.props.counterValue)}>INCREMENT by +1</button>
        <button onClick={()=>this.props.DecrementCounter(this.props.counterValue)}>DECREMENT by -1</button>
        <div>This is from calculate </div>
        <div>{this.props.calculate}</div>
      </>
    );
  }
}
const mapStateToProps = state =>{
    return{
        counterValue : state.counter.counter_value,
        //counterValue is a key & counter is from global reducer  which is key in createstore and accessing the inital state object 
        calculate : state.calculate.defaultValue
    }
}
export default connect(mapStateToProps,{IncrementCounter,DecrementCounter})(CounterScreen);

// import React, { Component } from "react"; -- with class
// import React,  {Component, useState} from "react"  -- Using useState
import React from "react";
import {Component, useState} from "react";


// State in Class Components
export default class State1 extends Component{
constructor(){
    super();
    // this.state property
    // this.state={   // Using state
    //     count: 0
    // };
    this.state={    // Using change or any other variable
        count: 0
    }
    // bind(this) reflect the changes done by the setState() to this.state.count
    this.incrementClassState=this.incrementClassState.bind(this);
    this.decrementClassState=this.decrementClassState.bind(this);
}

    incrementClassState(){
        // Make changes to change the state of count property with the helop of this.setState
        // this.setState({     /// Using State
        //     count: this.state.count+1
        // });
        // console.log(this.state.count);

        this.setState({ 
            count: this.state.count+1
        });
        console.log(this.state.count)
    }
    decrementClassState(){
        // this.setState({
        //     // count: this.state.count-1  // Decrements the value
        //      count: (this.state.count>1)?this.state.count-1 : 0    // Ternary operator
        // });
        // console.log(this.state.count);
       this.setState({ 
        count: (this.state.count>1) ? this.state.count-1 : 0
        });
        console.log(this.state.count)
    }
  render(){
    return(
        <div>
            <p> Class Component - State Management - {this.state.count } </p>
           <button onClick={this.incrementClassState}> Class State - Increment </button>
           <button onClick={this.decrementClassState}> Class State - Decrement </button>
        <hr />
        <State2 />
        <State3 />
        </div>
    )
  }
}

// Functional Component for State Management
const State2 = () => {
    // State-useState-react
     const [count, setCount] = useState(0);    // Using setCount
    

    const increment = () => {
        setCount(count+1);
        console.log(count);
    };

    const decrement = () => {
        count>1 ? setCount(count-1) : setCount(0);
        console.log(count);
    };
    return ( <div>
        <h3> State Management - Functional</h3>
    <p> Functional Component - State Management Count value - {count } </p>
   <button onClick={increment}> Functional State Increment </button> 
   <button onClick={decrement}> Functional State Decrement </button> 
</div>
);
};

// Functional Component for State Management - Different way
const State3 = () => {
    // State-useState-react
     const [orderQty, changeOrderQty] = useState(1);    // Using ChangeOrderQty
    

    const increment = () => {
        changeOrderQty(orderQty+1);
        console.log(orderQty);
    };

    const decrement = () => {
        orderQty>1 ? changeOrderQty(orderQty-1) : changeOrderQty(1);
        console.log(orderQty);
    };
    return ( <div>
        <h3> State Management - Functional</h3>
    <p> Functional Component - State Management Count value - {orderQty } </p>
   <button onClick={increment}> Functional State Increment </button> 
   <button onClick={decrement}> Functional State Decrement </button> 
</div>
);
};


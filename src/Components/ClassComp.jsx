import React, { Component } from 'react'
// Class Components are stateful components
// React 18 - Now
// Before React 16 - Class (State management)
// After React 16 + - Hooks -Functional Components are converted into stateful components 
// Hooks - Converts Stateless components to Stateful components
// Developer - Need not depend on class(Functional components)   
export default class ClassComponent extends Component{
    render(){
        return (
            <h1> Welcome to Class Component </h1>
        )
    }
}
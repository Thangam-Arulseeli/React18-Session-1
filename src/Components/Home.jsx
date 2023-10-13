import React from "react";
//import of components
import Theme from "./Theme";
 import State1 from "./State";
import CardProfile from "./PropCards";
import { CurrentUser } from "./Props";

// Functional Components are stateless components
// Functional Components 1
//export default function Home(){
    function Home(){
    return (
        <div style={{marginLeft:100, marginTop:50}}>
           <h4> HOME COMPONENT - <CurrentUser /></h4> 
             <Theme />
            <CardProfile />
            <State1 />  

        <div> 
            <h1 style={{color:'blue',backgroundColor:'cyan'}}> Welcome to my functional component - Home </h1>
            <p align="left"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, est adipisci iste facere voluptatem quae sit repellendus, accusamus corrupti nesciunt cumque natus ratione quas harum, eos iure quaerat. Adipisci, illum! </p>
            <h3> Example for the functional component </h3>
           <Home1> </Home1>
           <hr /> 
           <Home2></Home2> 
        </div>
        </div>
    );
}
 export default Home;

// Functional Components 2
function Home1(){
    return (
        <div> 
            <h1> Welcome to my functional component - Home1 </h1>
            <p align="left"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, est adipisci iste facere voluptatem quae sit repellendus, accusamus corrupti nesciunt cumque natus ratione quas harum, eos iure quaerat. Adipisci, illum! </p>
            <h3> Example for the functional component </h3>
        </div>
    );
}

// Functional Components 3
 const Home2 = () => {
    return (
        <div> 
            <h1> Welcome to my functional component - Home 2 </h1>
            <p align="right"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, est adipisci iste facere voluptatem quae sit repellendus, accusamus corrupti nesciunt cumque natus ratione quas harum, eos iure quaerat. Adipisci, illum! </p>
            <h3> Example for the functional component </h3>
        </div>
    );
}

 // export {Home1, Home2};   // Export separately
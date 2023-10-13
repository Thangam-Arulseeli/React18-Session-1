import "./App.css";
import Home from "./Components/Home";
//import ClassComponent from "./Components/ClassComp";
//import State1 from "./Components/State";

// Routing in React
// npm install react-router-dom@6 and npm audit fix --force
import { Routes, Route} from 'react-router-dom' 

// Importing components
//import Home from "./Components/Home";
import Gallery from "./Components/Gallery"
import Nav from "./Components/Navbar";
import Product from "./Components/ProductApi";

//Component
function App() {
  // console.log("Test");
  // Logical Part -- JS
  //UI - will be given in return statement - HTML & JS
   return (
    //<div className="App">
    <div>
      
      {/* Inline Styling in React {{ }}  
      Size will be in pixels by default, when InLine Style is used in React */}
        <h3 style={{color:'blue', fontSize:20, marginLeft:10 }}> InLine Styling </h3> 
    
    <div>
      {/*   Navbar which is common for all the components Root route for React is Port 3000*/}
       <Nav />
      <Routes>
        <Route exact path="Home" element={<Home />} />
         <Route exact path="Gallery" element={<Gallery />} />
         <Route exact path="Products" element={<Product />} />
      </Routes>
      </div> 
    </div>
   );
}



  //  <div className="container">
  //     <h2> Welcome to React Application </h2>
  //     <h3> Welcome you all </h3>
  //     <hr />
  //     {/* // Reuse / nesting the components */}
  //     {/* <Home> </Home> */}
  //     <Home />
  //     <Home1 />
  //     <Home2 />
  //     <hr />
      
      
  //     <ClassComponent />
  //     <hr />
  //     <p> State MGT - Using Class & Function </p>
  //     <State1> </State1>
  //   </div>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

export default App;

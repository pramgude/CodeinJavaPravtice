import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  render(){
const allusers=this.state.allusers
const searchField=this.state.searchField



    return(
        
  <div className='App'>
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To React Application.........hi
        </p>
      
      </header>
      </div>
     
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welome To React Application.........
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//          Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

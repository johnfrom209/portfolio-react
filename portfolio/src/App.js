import React, { Component } from 'react';
import Main from './components/Main';
import background from "./images/polygon.png"

// function App() {


//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }


class App extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <Main />
      </div>
    );
  }
}

export default App;

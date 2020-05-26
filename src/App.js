import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main  from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
    	<BrowserRouter>
	      <div className="App">
	        <Main/>
	      </div>
    	</BrowserRouter>
    );
  }
}


export default App;
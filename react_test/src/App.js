import React from 'react';
// import logo from './asset/images/logo.svg';
import './asset/css/App.css';

// import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">
      <Login></Login>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to <code>young's</code> test
        </p>
      </header> */}
      {/* <Router>
        <div>
          <Route exact path='/' component={Home}></Route>
          <Route path='/Page2' component={Page2}></Route>
          <Route path='/Page3' component={Page3}></Route>
        </div>
      </Router> */}
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import App from './App';
// import Test1 from './Test1';
// import Game from './Testjsx';
// import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(Test1,document.getElementById('test1'));
// ReactDOM.render(<Test1/>,document.getElementById('test1'));
// ReactDOM.render(<Game/>,document.getElementById('test0'));
// ReactDOM.render(<TodoList data={data}/>,document.getElementById('test0'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

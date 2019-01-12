import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

ReactDOM.render(<App />, document.getElementById('root'));
ReactGA.initialize('UA-74725074-1');
ReactGA.pageview(window.location.pathname + window.location.search);

console.log(`
-------------------------
oooo    oooo oooooooooo.
'888   .8P'  '888'   'Y8b
 888  d8'     888     888
 88888[       888oooo888'
 888'88b.     888    '88b
 888  '88b.   888    .88P
o888o  o888o o888bood8P'
_________________________

Welcome Fellow Engineers 🔥
`)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

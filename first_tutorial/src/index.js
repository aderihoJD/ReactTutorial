import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import Flash from './Flash';

ReactDOM.render(
    <BrowserRouter>
        <div>
            Hello Johny!
            <Link to="/">App</Link>
            <Link to="/flash">Flash</Link>

            <Route exact path="/" component={App}/>
            <Route path="/flash" component={Flash}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);


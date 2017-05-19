import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import List from './components/list';
import { Router, Route, hashHistory } from 'react-router';

export default class Root extends React.Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Index} path='/'></Route>
                <Route component={List} path='list'></Route>
            </Router>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('app'));
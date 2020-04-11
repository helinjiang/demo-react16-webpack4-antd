import React, { Component } from 'react';

import SayHello from './components/say-hello';

import './App.less';

export default class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <h1>hello,world!</h1>
                <SayHello/>
            </div>
        );
    }
}
import React, { Component } from 'react';
import Layout from './components/a_layout-container/layout';
import './App.css';

class App extends Component {
    getCachedAndBuffered() {
        console.log('a change')
    }

    render() {
        return (
            <div className="App">
                <Layout />
            </div>
        );
    }
}

export default App;
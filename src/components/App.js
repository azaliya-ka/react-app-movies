import React, { Component } from 'react';
import { ErrorBoundary } from './ErrorBoundary'
import { Home } from '../pages/Home/Home';

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Home />
            </ErrorBoundary>
        )
    }
}

export default App;
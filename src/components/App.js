import React, { Component } from 'react';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary'
import { HomePage } from './HomePage/HomePage';

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <HomePage />
            </ErrorBoundary>
        )
    }
}

export default App;
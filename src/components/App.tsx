import React, { Component } from 'react';
import { createContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary'

import { Home } from '../pages/Home/Home';
import { movies } from './MockedData';

export const Context = createContext([]);

class App extends Component {
    render() {
        return (
            <ErrorBoundary fallback={<h1>Oops, something went wrong</h1>}>
                <Context.Provider value={movies}>
                    <Home />
                </Context.Provider>
            </ErrorBoundary>
        )
    }
}

export default App;
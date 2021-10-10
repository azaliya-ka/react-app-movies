import React, { Component } from 'react';
import {createContext } from 'react';
import { ErrorBoundary } from './ErrorBoundary'
import { Home } from '../pages/Home/Home';
import { films } from './../components/MockedData';

export const Context = createContext();

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Context.Provider value={films}>
                    <Home />
                </Context.Provider>
            </ErrorBoundary>
        )
    }
}

export default App;
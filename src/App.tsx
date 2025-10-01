import React, { Component } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import { Home } from './pages/Home/Home';
import store from './store/store';

class App extends Component {
    render() {
        return (
            <ErrorBoundary fallback={<h1>Oops, something went wrong</h1>}>
                <Provider store={store}>
                    <Home />
                </Provider>,
            </ErrorBoundary>
        )
    }
}

export default App;
import React from 'react';
import { films } from './../../MockedData'
import { isEmpty, isNil } from 'ramda';

const ErrorBoundary  = ({ children }) => {
    const isError = isEmpty(films) || isNil(films);
    return (
        <>
            {isError ? <h1>Oops, something went wrong</h1> : children}
        </>
    );
}
  
export { ErrorBoundary  };
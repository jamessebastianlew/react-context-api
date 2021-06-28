import React from 'react';

import CounterProvider from './contexts/CounterContext.js';
import Button from './Button.js';
import Display from './Display.js';

const App = () => {
    return (
        <CounterProvider>
            <Button val={3}/>
            <Display />
        </CounterProvider>
    );
};

export default App;

import React, { useContext } from 'react';

import { CounterContext } from './contexts/CounterContext.js';

const Display = () => {
    const { counterState: { count } } = useContext(CounterContext);
    return <h1>{count}</h1>
};

export default Display;
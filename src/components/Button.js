import React, { useContext } from 'react';

import { CounterContext } from './contexts/CounterContext.js';

const Button = ({ val }) => {
    const { counterDispatch: dispatch } = useContext(CounterContext);
    return <button onClick={() => dispatch({type: 'ADD', payload: val })}>Increase Counter</button>
};

export default Button;
import { useReducer, createContext } from 'react';

import {countReducer} from '../reducers/reducers.js';

const initialState = {};

export const CounterContext = createContext(initialState);


const CounterProvider = ({children}) => {
    const [counterState, counterDispatch] = useReducer(countReducer, {count: 0});
    return <CounterContext.Provider value={{counterState, counterDispatch}}>{children}</CounterContext.Provider>
};

export default CounterProvider;
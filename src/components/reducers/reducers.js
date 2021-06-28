export const countReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return {...state, count: state.count + action.payload};
        default:
            break;
    }
    return state;
}
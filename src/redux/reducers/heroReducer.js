const heroReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_HERO':
            return action.payload;
        default:
            return state;
    }
};

export default heroReducer;
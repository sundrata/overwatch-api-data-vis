const heroReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_HERO':
        console.log('hit reducer');
            return action.payload;
        default:
        console.log('hit reducer');
            return state;
    }
};

export default heroReducer;
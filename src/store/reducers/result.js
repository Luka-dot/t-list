import * as actionTypes from '../actions';

const initialState = {
    results: [{id: "1", name: "test", completed: false}, {id: "22", name: "MILK", completed: false}]
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                results: state.results.concat({id: new Date(), name: action.result, completed: false})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);

            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
};

export default reducer;
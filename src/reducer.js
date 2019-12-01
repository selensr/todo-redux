import {SET_FILTER} from "./actions";

const rootReducer = function (state = {
    activeFilter: "all"
}, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter}
        default:
            return state;
    }

};

export default rootReducer
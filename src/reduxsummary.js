// Store u tanımladık
// reducer.js
import {SET_FILTER} from "./actions/actions";
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

// Store olusturduk
// store.js
import {createStore} from 'redux';
import reducer from './reducer/reducer';

const store = createStore(reducer);
export default store;

// Action tanımladık
// actions.js
export const SET_FILTER = 'SET_FILTER';

// Actionu olusturduk
// actioncreator.js
import {SET_FILTER} from "./actions/actions";
import {connect, Provider} from "react-redux";
import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

// Appe bağlama
const ProvideApp = (props) => <Provider store={store}><App /></Provider>

// Componente değer bağlama
const mapStateToProps = (state) => {
    return {
        activeFilter: state.activeFilter
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);

// Componente fonksiyon bağlama
const mapDispatchToProps = dispatch => ({
    changeFilter: (newFilter) => {dispatch(setFilter(newFilter))}
});
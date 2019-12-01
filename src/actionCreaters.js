import {SET_FILTER} from "./actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}
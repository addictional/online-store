import {Reducer} from 'redux';
import {AllActions} from './actions';
import {ACTIONS_TYPES} from './types';
import {MainState,defaultState} from './state';




const reducer : Reducer<MainState,AllActions> = (state = defaultState,action) => {
    switch(action.type) {
        case ACTIONS_TYPES.SET_VIEWPORT_WIDTH: {
            return {
                ...state,
                viewportWidth: action.payload.width,
            }
        }
        default: {
            return {...state};
        }
    }
}

export default reducer;


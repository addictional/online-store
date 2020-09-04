import {Action} from 'redux';
import {ACTIONS_TYPES} from './types';

interface SetViewportWidthPayload {
    width: number;
}

interface SetViewportWidthAction extends Action<ACTIONS_TYPES.SET_VIEWPORT_WIDTH> {
    payload : SetViewportWidthPayload;
}


export function setViewportWidth(width : number) : SetViewportWidthAction {
    return {
        type: ACTIONS_TYPES.SET_VIEWPORT_WIDTH,
        payload: {
            width
        }
    }
}


interface SetShit {
    shit: string;
}

interface SewShitAction extends Action<ACTIONS_TYPES.SET_SHIT> {
    payload : SetShit;
}


export function setShit(shit : string) : SewShitAction {
    return {
        type: ACTIONS_TYPES.SET_SHIT,
        payload: {
            shit
        }
    }
}


export type AllActions = SetViewportWidthAction | SewShitAction;
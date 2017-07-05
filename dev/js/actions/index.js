import * as types from './actionTypes';

export const saveRecord = (data) => {
	return{	type:types.SAVE_RECORD,	payload:data } 
}

export const nextStep = () => {
	return{type:types.NEXT_STEP}
}

export const prevStep = () => {
	return{type:types.PREV_STEP}
}

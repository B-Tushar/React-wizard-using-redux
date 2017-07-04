import * as types from './actionTypes';

export const saveRecord = (data) => {
	debugger;
	return{
			type:types.SAVE_RECORD,
			payload:data
		   }
}

export const nextStep = () => {
	debugger
	return{
			type:types.NEXT_STEP
		   }
}

export const prevStep = () => {
	debugger
	return{
			type:types.PREV_STEP
		   }
}
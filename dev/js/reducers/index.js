const initialState = {
  name     : null,
  email    : null,
  password : null,
  currentStep:1
}

const wizardReducer = (state = initialState, action) => {
	switch(action.type){
	   case "SAVE_RECORD":
			       return Object.assign({}, state, 
				      {name:action.payload.name,email:action.payload.email,
				       password:action.payload.password,currentStep:getNextStep(state)});

	   case "NEXT_STEP":
			       return Object.assign({}, state, {currentStep: getNextStep(state)});

	   case "PREV_STEP":
			       return  Object.assign({}, state, {currentStep: getPrevStep(state)});
	}
   return state;
}


const getNextStep = (state) => {return ++state.currentStep}

const getPrevStep = (state) => {return --state.currentStep}

export default wizardReducer;

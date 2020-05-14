const initialState = {
    darkMode: false
}

function root(state = initialState, action){
   switch(action.type){
       case "TOGGLE" : 
       console.log(state.darkMode);
        return {
            ...state,
            darkMode : !state.darkMode
        }
       default :
       return state
   }
}

export default root;
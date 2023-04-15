import types from "../actions/actions";

const reducer = (state,action)=>{
    switch(action.type){
        case types.ADD:
            return [...state,action.payload];
        case types.DELETE:
            return state.filter(user => user.id !== action.payload);
        case types.UPDATE:
            return state.map(user => user.id === action.payload.id ? 
                {...state,
                id:action.payload.id,
                nombre:action.payload.nombre,
                apellido:action.payload.apellido,
                edad:action.payload.edad
            } : user)
        default:
            return state;
    }
}

export default reducer;
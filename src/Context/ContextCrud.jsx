import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/reducer";


export const ContextCrud = createContext();

const initialState = [
    {
        id:1,
        nombre:"Carlos Raul",
        apellido:"Perez Sevillano",
        edad:12
    },{
        id:2,
        nombre:"Kevin Manuel",
        apellido:"Velasquez Rojas",
        edad:18
    },{
        id:3,
        nombre:"Samuel",
        apellido:"Castillo Ordoñez",
        edad:17
    },{
        id:4,
        nombre:"Camila Veronica",
        apellido:"Hurtado Serna",
        edad:21
    },{
        id:5,
        nombre:"Viviana Sofia",
        apellido:"Cornejo de Torre",
        edad:18
    }
];

export const ProviderCrud  = ({children}) =>{

    const [data,dispatch] = useReducer(reducer,initialState);

    return <ContextCrud.Provider value={{data,dispatch}}>
        {children}
    </ContextCrud.Provider>
}
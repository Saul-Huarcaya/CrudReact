import { useContext } from "react";
import {useForm} from "react-hook-form";
import { ContextCrud } from "../Context/ContextCrud";
import types from "../actions/actions";

import styled from "styled-components";

const TitleForm = styled.h2`
    color: orange;
    font-size: 1.6rem;
    font-family: fantasy;
    text-align: center;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    input[type="text"] , input[type="number"]{
        border: none;
        padding: 6px 0px 6px 4px;
        width: 100%;
        border-radius: 4px;
        font-size: 1rem;
    }

    input[type="text"]:valid, input[type="number"]{
        border: 1px solid orange;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`;

const TextError = styled.p`
    color: red;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    padding-top: 0.25rem;
`;

const Button = styled.input`
    background-color: rgb(187, 122, 2);
    border: 0;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    font-weight: 600;

    &:hover{
        background-color: rgb(255, 166, 2);
    }
`;

function Update({id,setModal}){

    const {data,dispatch} = useContext(ContextCrud);
    const usuario = data.find((user) => user.id === id);
    const {register,formState:{errors},reset, handleSubmit} = useForm({defaultValues:usuario});

    const DataUpdate = (dataUpdate) =>{
        if(dataUpdate){
            dispatch({type:types.UPDATE,payload:dataUpdate});
            setModal(false);
            reset();
        }
    }

    return <>
        <TitleForm>Actualizar</TitleForm>
        <Form onSubmit={handleSubmit(DataUpdate)}>
                <input 
                    type="text"
                    autoComplete="true"  
                    placeholder="Nombre" 
                    {...register("nombre",{
                        required:true,
                        maxLength:100
                    })}
                    name="nombre"
                    />

                    {errors.nombre?.type === "required" && <TextError>El dato es obligatorio</TextError>}
                    {errors.nombre?.type === "maxLength" && <TextError>El nombre es demasiado largo</TextError>}
                

                
                <input 
                    type="text" 
                    placeholder="Apellido"
                    autoComplete="true"   
                    {...register("apellido",{
                        required:true,
                        maxLength:100
                    })}
                    name="apellido"
                    />

                    {errors.apellido?.type == "required" && <TextError>El apellido es obligatorio</TextError>}
                    {errors.apellido?.type === "maxLength" && <TextError>El apellido es demasiado largo</TextError>}
                
                <input 
                    type="number" 
                    placeholder="Edad"
                    autoComplete="true"  
                    name="edad"
                    {...register("edad",{
                        required:true,
                        min:12,
                        max:85
                    })}
                    />

                    {errors.edad?.type === "required" && <TextError>La edad es obligatorio</TextError>}
                    {errors.edad?.type === "min" && <TextError>La edad minima 12</TextError>}
                    {errors.edad?.type === "max" && <TextError>La edad maxima es 85</TextError> }   
                
                <Button type="submit"  value="Guardar"/>
                
            </Form>
    </>
}

export default Update;
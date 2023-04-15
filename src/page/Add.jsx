import {useForm} from "react-hook-form";
import { useContext } from "react";
import { ContextCrud } from "../Context/ContextCrud";
import types from "../actions/actions";
import styled from "styled-components";

const TitleForm = styled.h2`
    color: rgb(1, 158, 1);
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

    input[type="text"],
    input[type="number"]{
        border: none;
        padding: 6px 0px 6px 4px;
        width: 100%;
        border-radius: 4px;
        font-size: 1rem;
    
    }

    input[type="text"]:valid,
    input[type="number"]{
        border: 1px solid rgb(1, 158, 1);
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
    background-color: #1aa33a;
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
    transition: background-color 0.2s ease-in-out;

    &:hover{
        background-color: rgb(1, 158, 1);
    }
`;

function Add({setModalAdd}){

    const {register,handleSubmit,reset,formState:{errors}} = useForm();

    const {dispatch} = useContext(ContextCrud);

    const agregarDatos = (data) =>{

        if(data){
            dispatch({
                type:types.ADD,
                payload:{
                    id:Date.now(),
                    nombre:data.nombre,
                    apellido:data.apellido,
                    edad:data.edad
                }
            })
            reset();
            setModalAdd(false);
        }

    }
    return<>
        <TitleForm>Agregar</TitleForm>
        <Form onSubmit={handleSubmit(agregarDatos)}>
            
            <input 
                type="text"  
                placeholder="Nombre"
                autoComplete="true"
                {...register("nombre",{
                    required:true,
                    maxLength:100
            })}/>
            {errors.nombre?.type === "required" && <TextError>El dato es obligatorio</TextError>}
            {errors.nombre?.type === "maxLength" && <TextError>El nombre es demasiado largo</TextError>}
            

            
            <input 
                type="text" 
                placeholder="Apellido"
                autoComplete="true" 
                {...register("apellido",{
                    required:true,
                    maxLength:100
                })} />
            {errors.apellido?.type == "required" && <TextError>El apellido es obligatorio</TextError>}
            {errors.apellido?.type === "maxLength" && <TextError>El apellido es demasiado largo</TextError>}
            

            
            <input 
                type="number" 
                placeholder="Edad"
                autoComplete="true"
                {...register("edad",{
                    required:true,
                    min:12,
                    max:85
                })}/>
            {errors.edad?.type === "required" && <TextError>La edad es obligatorio</TextError>}
            {errors.edad?.type === "min" && <TextError>La edad minima 12</TextError>}
            {errors.edad?.type === "max" && <TextError>La edad maxima es 85</TextError> }
            
            <Button type="submit" value="Enviar"/>
            
        </Form>
    </> 
}
export default Add;
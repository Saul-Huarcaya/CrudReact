import { useContext } from "react";
import { ContextCrud } from "../Context/ContextCrud";
import types from "../actions/actions";
import styled from "styled-components";

const ContainerDelete = styled.div`
    padding-top: 28px;
    display: flex;
    flex-direction: column;
`;
const TextDelete = styled.div`
    background-color: rgb(0, 0, 0,0.9);
    padding: 1rem 0.5rem;
    color: white;
    span{
        color: red;
    }
`;
const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;
const ButtonDelete = styled.button`
    text-align: center;
    font-size: 1rem;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color: ${props => (props.$yes) ? "#28a745":"#dc3545"};
    border-color: ${props => (props.$yes) ? "#28a745":"#dc3545"};

    &:hover{
        background-color: ${props => (props.$yes) ? "green":"red"};
    }
`;
function Delete({setModal,id}){

    const {data,dispatch} = useContext(ContextCrud);
    
    const usuario = data.find((usuario) => usuario.id == id);

    const handleEliminar = () =>{
        dispatch({type:types.DELETE,payload:usuario.id});
        setModal(false);
    }

    return <ContainerDelete >
            <TextDelete>
                <p>¿ Estas seguro de eliminar al usuario
                <span> {usuario.nombre} {usuario.apellido}</span> ?</p>
            </TextDelete>
            <ContainerButton>
                <ButtonDelete $yes onClick={handleEliminar}>Si</ButtonDelete>
                <ButtonDelete onClick={()=>setModal(false)}>No</ButtonDelete>
            </ContainerButton>
    </ContainerDelete>
}
export default Delete;
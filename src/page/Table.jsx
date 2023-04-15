import Modal from "../components/Modal";
import Update from "./Update";
import Delete from "./Delete";

import { BsPenFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useState , useContext} from "react";
import { ContextCrud} from "../Context/ContextCrud";
import styled from "styled-components";

const ContainerTable = styled.div`
    width: 100%;
    overflow: auto;
`;
const CrudTable = styled.table`
    border-collapse: collapse;
    overflow-x: auto ;
    width: 100%;
    text-align: left;
    background-color: white;
    min-width: 540px;
    thead{
        background-color: black;
        color: white;
    }
    th:nth-child(1){
        width: 35%;
    }

    th:nth-child(3){
        width: 15%;
    }
    th:nth-child(4){
        width: 15%;
    }

    tr th{
        padding: 12px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
    tr td{
        padding: 12px;
        border-bottom: 1px solid grey;
        font-size: 1.1rem;
        word-break: break-all;
    }
`;
const ButtonTable = styled.div`
    display: inline-block;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0px 5px;
    color: ${props => (props.$update)? "orange":"red"};
    &:hover{
        color: ${props => (props.$update)? "rgb(255, 182, 46)":"rgb(255, 29, 29)"};
    }
`;
function Table(){

    const {data} = useContext(ContextCrud);
    const [idUpdate,setIdUpdate] = useState();
    const [idDelete,setIdDelete] = useState();
    const [ModalUpdate,setModalUpdate] = useState(false);
    const [ModalDelete,setModalDelete] = useState(false);

    const HandleUpdate = (id) =>{
        setIdUpdate(id);
        setModalUpdate(true);
    }

    const HandleDelete = (id) =>{
        setIdDelete(id);
        setModalDelete(true);
    }

    
    return(
        <ContainerTable>
            <CrudTable>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length === 0)?
                            <tr>
                                <td colSpan={4}>Sin datos</td>
                            </tr>
                        
                        :data.map((user)=>
                            <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.edad}</td>
                                <td>
                                    <ButtonTable $update>
                                        <BsPenFill  onClick={()=>HandleUpdate(user.id)}/>
                                    </ButtonTable>

                                    <ButtonTable>
                                        <AiFillDelete onClick={()=>HandleDelete(user.id)}/>
                                    </ButtonTable>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </CrudTable>
            {ModalUpdate &&
                <Modal 
                    Modal={ModalUpdate} 
                    setModal={setModalUpdate}>
                    <Update 
                    id={idUpdate} 
                    setModal={setModalUpdate}/>
                </Modal>
            }

            {ModalDelete && 
                <Modal
                    Modal={ModalDelete}
                    setModal={setModalDelete}>
                    <Delete 
                    id={idDelete} 
                    setModal={setModalDelete} /> 
                </Modal>
            }
            
        </ContainerTable>
    )
}

export default Table;
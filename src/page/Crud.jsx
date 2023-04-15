import { useState } from "react";
import Modal from "../components/Modal";
import Table from "./Table";
import Add from "./Add";
import { ProviderCrud } from "../Context/ContextCrud";
import styled from "styled-components";

const ContainerApp = styled.div`
    width: 100%;
    padding-top: 1rem;
    display: flex;
`;

const ContainerCrud = styled.div`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h1`
    color: #1778F2;
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    
    @media screen and (max-width:375px) {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
`;
const ButtonAdd = styled.button`
    border: none;
    border: 1px solid #1aa33a;
    background-color: #1aa33a;
    color: white;
    padding: 0.5rem 0.25rem;
    font-size: 1.25rem;
    border-radius: 4px;
    width: 180px;
    margin-left: auto;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover{
        background-color: rgb(1, 158, 1);
    }
`;
function Crud(){
    
    const [ModalAdd,setModalAdd] = useState(false);

    return (
        <ProviderCrud>
            <ContainerApp>
                <ContainerCrud className="container">
                    <Title>CRUD useContext +  useReducer + useForm</Title>

                    <ButtonAdd onClick={() => setModalAdd(true)}>
                        Agregar
                    </ButtonAdd>

                    {ModalAdd &&
                        <Modal 
                            Modal={ModalAdd} 
                            setModal={setModalAdd}>
                            <Add setModalAdd={setModalAdd}/>
                        </Modal>
                    }

                    
                    <Table/>

                </ContainerCrud>
            </ContainerApp>
        </ProviderCrud>
    )
}
export default Crud;
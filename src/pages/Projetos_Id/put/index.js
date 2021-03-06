import React, {useState} from "react";
import axios, { Axios } from "axios";
import { Form } from 'react-bootstrap';
import { Drawer } from 'rsuite';
import { Button } from './styles'

import "rsuite/dist/rsuite.min.css";
const projetoPath = window.location.pathname;
function Edit() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const url= ("https://api-brisa-nodejs-postgresql.herokuapp.com" + projetoPath)
    const [data, setData]= useState({
        pr_nome: "",
        pr_descricao: ""
    })
    console.log(url)

    function update(e){
        e.preventDefault();
        axios.put(url,{
            pr_nome: data.pr_nome,
            pr_descricao: data.pr_descricao
        })
            .then(res=>{
                console.log(res.data)
                if (res.data == 'Esse projeto já foi editado!') {
                    alert('Esse Projeto já foi editado!')
                }
                else {
                    alert('Projeto editado com sucesso!')
                }
            })
            console.log(update)
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <>
            <Drawer open={open} onClose={handleClose} size="sm">
                <Drawer.Header>
                    <Drawer.Title>Editar Projeto</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <Form onSubmit={(e)=> update(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pr_nome" value={data.pr_nome} type="text" placeholder="Edite o nome do projeto"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pr_descricao" value={data.pr_descricao} type="text" placeholder="Edite a descrição do projeto"/>
                        </Form.Group>
                        
                        <Drawer.Actions>
                            <div className={`d-flex`}> 
                            <Button className={`btn btn-light`} onClick={(update) => setOpen(false)} variant="primary" type="submit">
                                Editar
                            </Button>
                            <Button className={`btn btn-light`} onClick={() => setOpen(false)}>Cancelar</Button>
                            </div>
                        </Drawer.Actions>
                    </Form>
                </Drawer.Body>
            </Drawer>
            <div>
                <Button onClick={handleOpen}>Editar</Button>
            </div>
        </>
    );
}

export default Edit;
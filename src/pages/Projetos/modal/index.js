import * as React from 'react';
import {useState} from "react";
import axios, { Axios } from "axios";
import { Form } from 'react-bootstrap';
import { Drawer, Message, useToaster } from 'rsuite';
import { Button } from './styles'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import "rsuite/dist/rsuite.min.css";
import api from '../../../api';

function PostProjetos() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const [openAlert, setOpenAlert] = React.useState(false);

    const handleClickCad = () => {
        setOpenAlert(true);
    };
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenAlert(false);
    };

    const url= "https://api-brisa-nodejs-postgresql.herokuapp.com/projetos"
    const [data, setData]= useState({
        pr_nome: "",
        pr_descricao: ""
    })

    function cadastrar(e){
        e.preventDefault();
        axios.post(url,{
            pr_nome: data.pr_nome,
            pr_descricao: data.pr_descricao
        })
            .then(res=>{
                console.log(res.data)
                
            })
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <>
            <Snackbar open={openAlert} autoHideDuration={2200} onClose={handleCloseAlert} anchorOrigin={{vertical: 'top', horizontal: 'left',}}>
                <Alert onClose={handleCloseAlert} severity="success" color="info">
                    Ih, funcionou oh!
                </Alert>
            
            </Snackbar>
            <Drawer open={open} onClose={handleClose} size="sm">
                <Drawer.Header>
                    <Drawer.Title>Cadastro de um novo Projeto</Drawer.Title>
                </Drawer.Header>
                
                <Drawer.Body>
                    <Form onSubmit={(e)=> cadastrar(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control required onChange={(e)=>handle(e)} id="pr_nome" value={data.pr_nome} type="text" placeholder="Digite o nome do projeto"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descri????o</Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} id="pr_descricao" value={data.pr_descricao} type="text" placeholder="Digite a descri????o do projeto"/>
                        </Form.Group>
                        
                        <Drawer.Actions>
                            <Button onClick={() => {
                                if(data.pr_nome != ""){
                                    setOpen(false)
                                    setOpenAlert(true);
                                
                                }
                            }} variant="primary" type="submit">
                                Cadastrar
                            </Button >
                            <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        </Drawer.Actions>
                    </Form>
                </Drawer.Body>
            </Drawer>
            <div>
                <Button onClick={handleOpen}><img src="assets/btn_create.svg" /></Button>
            </div>
        </>
    );
}

export default PostProjetos;
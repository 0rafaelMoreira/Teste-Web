import React, { FormEvent, useState } from "react";
import { Button } from '../../components/Button';

import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import { 
    Container, 
    Header, 
    Title, 
    Name, 
    HeaderButton,
    Footer,
    Codigo,
    Titulo,
    Descrição,

 } from "./styles";
import { InputForm } from "../../components/InputForm";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";





 interface FormData {
    idprojeto: string;
    ds_titulo: string;
    ds_descricao: string;
}
    
const schema = Yup.object().shape({
    idprojeto: Yup
        .number()
        .required("O código é obrigatório")
        .positive("O código deve ser positivo")
        .typeError("Informe um valor numérico"),
    ds_titulo: Yup
        .string()
        .required("O Título é obrigatório"),
    ds_descricao: Yup
        .string()
        .required("A descrição é obrigatório"),
})




export default function AddButton(){
    const history = useHistory()
    
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    async function handleRegister(form: FormData) {
        const newBox = {
            idprojeto: form.idprojeto,
            ds_titulo: form.ds_titulo,
            ds_descricao: form.ds_descricao,
        }
        console.log(newBox)
         try {
            await api.post("/ApiBox",  newBox ).then(() => history.push('/'))           

            reset();
         } catch (error: any) {
             console.log(error.message);
         }
    }


    return(
        <Container>
            <Header> 
                <Title>
                   <Name> Adicionar </Name> 
                    </Title>
                    <HeaderButton>
                    <Button title=" Adicionar" onClick={handleSubmit(handleRegister)}  />
                    </HeaderButton>
            </Header>


            <Footer>
            <Codigo>
                   <h3>  Código </h3>
                <InputForm
                    name="idprojeto"
                    placeholder="Codigo"
                    error={errors.idprojeto && errors.idprojeto.message} 
                    control = {control}
                    
                    />
                </Codigo>
                <h3>Título </h3>
                <Titulo>
            
                    <InputForm
                    name="ds_titulo"
                    placeholder="Título"
                    error={errors.ds_titulo && errors.ds_titulo.message}
                    control = {control}
                    />
            
                </Titulo>
                <h3>Descrição </h3>
                <Descrição>
                    <InputForm
                    name="ds_descricao"
                    placeholder="Descrição "
                    error={errors.ds_descricao && errors.ds_descricao.message}
                    control = {control}
                    />
                </Descrição>
            </Footer>


            
        </Container>
    );
}
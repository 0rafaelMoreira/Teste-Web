import React from "react";
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
import { useHistory, useLocation } from "react-router-dom";
import { api } from "../../services/api";


 interface FormData {
     id?:string;
    idprojeto?: string;
    ds_titulo?: string;
    ds_descricao?: string;
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







export default function EditButton(){

    

    const location = useLocation<FormData>()

    const varBox:FormData = {
                id:location.state.id ,
                idprojeto: location.state.idprojeto,
                ds_titulo: location.state.ds_titulo,
                ds_descricao: location.state.ds_descricao,
    }

    const history = useHistory()
    
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
         defaultValues:  varBox,
        resolver: yupResolver(schema),
    });

    async function HandleEditBox(form: FormData) {
        
       
         try {
            await api.put(`/ApiBox/${varBox.id}`,  {
                idprojeto: form.idprojeto,
                ds_titulo: form.ds_titulo,
                ds_descricao: form.ds_descricao,
            } 
            ).then(() => history.push('/'))           

            reset();
         } catch (error: any) {
             console.log(error.message);
         }
    }
    async function handleDelete(){
       // eslint-disable-next-line no-restricted-globals
       const res = confirm('Deleting');

       res ? await api.delete(`/ApiBox/${varBox.id}`).then(() => history.push("/")) : history.push('/');
    }

   

    return(
        <Container>
            <Header> 
                <Title>
                   <Name> Editar </Name> 
                    </Title>
                    <HeaderButton>
                    <Button title=" Editar" onClick={handleSubmit(HandleEditBox)}  />
                    <Button title=" Deletar" onClick={handleSubmit(handleDelete )}  />
                    
                    </HeaderButton>
            </Header>


            <Footer>
            
            

            <Codigo>
                   <h3>  Código </h3>
                <InputForm
                    name="idprojeto"
                    placeholder="Codigo"
                    error={errors.idprojeto && errors.idprojeto.message} 
                    control={control}
                    
                    />
                </Codigo>
              
                <h3>Título </h3>
                <Titulo>
            
                    <InputForm
                    name="ds_titulo"
                    placeholder="Título"
                    error={errors.ds_titulo && errors.ds_titulo.message}
                    control={control}
                    />
            
                </Titulo>
                <h3>Descrição </h3>
                <Descrição>
                    <InputForm
                    name="ds_descricao"
                    placeholder="Descrição "
                    error={errors.ds_descricao && errors.ds_descricao.message}
                    control={control}
                    />
                </Descrição>
               
            </Footer>


            
        </Container>
    );
}
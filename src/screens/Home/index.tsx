

import {Button} from '../../components/Button'
import { BoxDTO } from '../../dtos/BoxDTO';
import { api } from '../../services/api';
import { CardBox} from '../../components/CardBox';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'


import { 
    Container, 
    Header, Title, 
    Name, 
    HeaderButton,
    Footer,

} from "./styles";

export default function Home(){

    function handleEditButton(VarBox: BoxDTO) {
            history.push({
                
                pathname:`/editar`,
                state: VarBox
            })
    }

    const history = useHistory();

    function createButton(){
        history.push("/adicionar")
     }
    
    const [box, setBox] = useState<BoxDTO[]>([]);


    useEffect(() =>{
        async function Boxapi () {
        
           try {

            const response = await api.get('/ApiBox');
            setBox(response.data);

           } catch (error) {
               console.log(error);
           }
           
        }
        Boxapi();
    },[])



    
    return(
        <Container>
            <Header> 
                <Title>
                   <Name> Projetos </Name> 
                    </Title>
                    <HeaderButton>
                    <Button title=" Novo" onClick={createButton}/>
                    </HeaderButton>
            </Header>
            <Footer>
                <ul>
                    {box.map((project) => <li><CardBox data={project} onClick={()=>handleEditButton(project)}/></li>)}
                </ul>
            </Footer>

            
        </Container>
    );
}
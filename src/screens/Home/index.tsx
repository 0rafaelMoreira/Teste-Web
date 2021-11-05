

import {Button} from '../../components/Button'
import { BoxDTO } from '../../dtos/BoxDTO';
import { api } from '../../services/api';
import { CardBox} from '../../components/CardBox';
import React, {useEffect, useState} from 'react';


import { 
    Container, 
    Header, Title, 
    Name, 
    HeaderButton,
    Footer,

} from "./styles";




function createButton(){
    console.log("passei aq")
}


export default function Home(){

    console.log("tewetdddd");
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
                    {box.map((project) => <li><CardBox data={project} onClick={() => {}}/></li>)}
                </ul>
            </Footer>

            
        </Container>
    );
}
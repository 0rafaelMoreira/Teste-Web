
import { Button } from '../../components/Button';


import { 
    Container, 
    Header, 
    Title, 
    Name, 
    HeaderButton,
    Footer

 } from "./styles";



function createButton(){
    console.log("passei aqui")
}



export default function AddButton(){
    

    return(
        <Container>
            <Header> 
                <Title>
                   <Name> Adicionar </Name> 
                    </Title>
                    <HeaderButton>
                    <Button title=" Adicionar" onClick={createButton}/>
                    </HeaderButton>
            </Header>


            <Footer>
               
                <label >Codigo</label>
                <input type="text" name="Codigo"/>
                <label >Titulo</label>
                <input type="text" name="Codigo"/>
                <label >Descrição</label>
                <input type="text" name="Codigo"/>
                

            </Footer>


            
        </Container>
    );
}
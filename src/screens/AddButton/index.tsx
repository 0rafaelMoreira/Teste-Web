
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
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



export function AddButton(){
    

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

            
            </Footer>


            
        </Container>
    );
}
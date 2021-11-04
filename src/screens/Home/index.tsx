
import { Container, Header, Title, Name, HeaderButton } from "./styles";
import {Button} from '../../components/Button'

function createButton(){
    console.log("Creating")
}


export function Home(){
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
            
        </Container>
    );
}
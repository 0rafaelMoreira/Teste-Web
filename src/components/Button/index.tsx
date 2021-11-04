

import {
    Container,
    TitleButton
} from './styles';

interface ButtonProps {
    
    onClick: () => void;
    title: string;
}


export function Button({ onClick, title}: ButtonProps){
    return (
        <Container
        onClick={onClick}
        
        ><TitleButton>
            {title}
            </TitleButton>
        </Container>
            
            
        
    );
}
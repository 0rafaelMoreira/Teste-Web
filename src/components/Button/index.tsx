

import { ButtonHTMLAttributes } from 'react';
import {
    Container,
    TitleButton
} from './styles';

interface  ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    
    
    title: string;
    
}


export function Button({ title,...rest}: ButtonProps){
    return (
        <Container
        
        {...rest}
        
        ><TitleButton>
            {title}
            </TitleButton>
        </Container>
            
            
        
    );
}
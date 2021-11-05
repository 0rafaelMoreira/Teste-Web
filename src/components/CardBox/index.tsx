
import { BoxDTO } from '../../dtos/BoxDTO';

import {
  Container,
  Code,
  Title,
  Description,
  Details,
  BackgroundCard
} from './styles';

interface Props{
    data: BoxDTO;
    onClick: () => void
}

export function CardBox({data, onClick, ...rest}: Props){
  return (
    <BackgroundCard>
    <Container 
      onClick={onClick}
      {...rest}
    >
        <Details>
        <Title>Código:<Code>{data.idprojeto}</Code></Title>
           

           <Title>Título:<Title>{data.ds_titulo}</Title></Title>


           <Title>Descrição:<Description>{data.ds_descricao}</Description></Title>
        </Details>
    </Container>
    </BackgroundCard>
  );
}
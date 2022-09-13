/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, Image1, Image2, Image3, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';
import GustavoLima from '../../assets/atracoes/GustavoLima.png';
import MariliaMendonca from '../../assets/atracoes/MariliaMendonca.png';
import Safadao from '../../assets/atracoes/Safadao.png';
import vitrine from '../../assets/vitrine.png';
import ZeNetoCristiano from '../../assets/atracoes/ZeNetoCristiano.png';
import XandeAviao from '../../assets/atracoes/XandeAviao.png';
import Marilia from '../../assets/atracoes/Marilia.png';


function HomeHero() {
  return (
    <Container data-aos="fade-up">
      
      <Image1 src={Marilia} alt="Marilia" />
      <Image3 src={GustavoLima} alt="Marilia" />
      <Image2 src={Safadao} alt="Safadao" />
      
      <div>
        <TextContainer>
          <img src={vitrine} alt="vitrine" />
        </TextContainer>
        
      </div>
    </Container>
  );
}

export default HomeHero;
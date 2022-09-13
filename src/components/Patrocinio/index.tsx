import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Patrocinios() {
  return (
    <Container>
      <section>
        <ConhecimentoItem title="Motel PitStop" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="Djalma's" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Rei dos Óculus" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="Sapataria Pinhem" icon={<FaReact />} />
      </section>
    </Container>
  );
}

export default Patrocinios;
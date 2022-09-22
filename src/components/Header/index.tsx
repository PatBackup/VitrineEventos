import NavLink from './NavLink';
import { Container } from './styles';
import vitrine from '../../assets/vitrine.png';
import { VscMenu } from 'react-icons/vsc';

function Header({ onOpen }) {
  return (
    <Container>
      <img src={vitrine} alt="Vitrine" />
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Ingressos" path="/Ingressos" includes />
        <NavLink title="Cardapio" path="/cardapio" includes />
        <NavLink title="Chat" path="/Chat" includes />
      </ul>
      <div>
        <NavLink title="Cadastro" path="/cadastro" includes />
        <NavLink title="Entre" path="/login" includes />   
      </div>
      <button type="button" onClick={onOpen}>
        <VscMenu />
      </button>
      
    </Container>
  );
}

export default Header;
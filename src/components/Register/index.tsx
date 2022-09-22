/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, Header, Input } from './styles';


function RegisterHero() {
  return (
    <Container data-aos="fade-up">
        <Header>
 		    <h1>Registro</h1>
 	    </Header>
        <main className="container">
            <form>
                <span>
                    <Input type="text" placeholder="Username ou email" name=""/>
                </span>
                <span>
                    <Input type="password" placeholder="Senha" name=""/>
                </span>
                <span>
                    <Input type="password" placeholder="Confirme" name=""/>
                </span>
                <button>Cadastrar</button>
            </form>
        </main>

    </Container>
  );
                
  
}

export default RegisterHero;
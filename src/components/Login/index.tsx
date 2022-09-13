/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, Header, Input } from './styles';


function LoginHero() {
  return (
    <Container data-aos="fade-up">
        <Header>
 		    <h1>Login</h1>
 	    </Header>
        <main className="container">
            <form>
                <span>
                    <Input type="text" placeholder="Username ou email" name=""/>
                </span>
                <span>
                    <Input type="password" placeholder="Senha" name=""/>
                </span>
                <button>Entrar</button>
            </form>
        </main>

    </Container>
  );
                
  
}

export default LoginHero;
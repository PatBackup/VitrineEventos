import {
    AiOutlineTwitter,
    AiOutlineFacebook,
    AiOutlineInstagram
  } from 'react-icons/ai';
  import { Container } from './styles';
  
  function Footer() {
    function handleRedirect(url) {
      window.open(url);
    }
  
    function handleScrollTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    return (
      <Container>
        <div className="container">
          <button type="button" onClick={handleScrollTop}>
            Voltar ao topo
          </button>
          <section>
            <AiOutlineTwitter
              onClick={() => handleRedirect('https://twitter.com')}
            />
            <AiOutlineInstagram
              onClick={() => handleRedirect('https://instagram.com')}
            />
            <AiOutlineFacebook
              onClick={() => handleRedirect('https://Facebook.com')}
            />
          </section>
        </div>
      </Container>
    );
  }
  
  export default Footer;
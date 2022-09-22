import Head from 'next/head';
import { useEffect } from 'react';
import Aos from 'aos';
import RegisterHero from '../components/Register';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Patrocinios from '../components/Patrocinio';
import { HomeContainer } from '../styles/HomeStyles'

export default function Cadastro() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Cadastro | Vitrine Shows e Eventos</title>
        <meta
          name="description"
          content="Vitrine a melhor casa para eventos e shows do norte de minas"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container">
        <RegisterHero />
      </main>

      <Patrocinios/>
      <Footer />

    </HomeContainer>
  );
}

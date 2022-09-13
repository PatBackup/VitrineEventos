import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Videos({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title=""/>

      <section>
        <ProjetoItem
          img=""
          title="Cid Sousa"
          type="O cantor das vaquejas"
        />

        <ProjetoItem
          img=""
          title="Marcelo Moreno"
          type="O rei do piseiro"
        />

        <ProjetoItem
          img=""
          title="Marcelinho dos Teclados "
          type="O ceresteiro da madrugada"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Visite Nosso Canal</a>
        </Link>
      </button>
    </Container>
  );
}

export default Videos;
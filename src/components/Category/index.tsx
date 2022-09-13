import NavLink from '../Header/NavLink'
import { Container } from './styles';
import { VscMenu } from 'react-icons/vsc';
import Whisk from '../../assets/cardapio/Whisk.png';
import Porção from '../../assets/cardapio/Porção.jpg';
import vacaatolada from '../../assets/cardapio/vacaatolada.jpg';
import tropeiro from '../../assets/cardapio/tropeiro.webp';
import Drinks from '../../assets/cardapio/Drinks.png';

import React from 'react';

function Category({ onOpen }) {
  return (
    <Container>
      <div>
        <a href="/cardapio/bebidas"><img src={Whisk} /></a>
        <NavLink title="Bebidas" path="/cardapio/bebidas" includes />
      </div>
      <div>
        <a href="/cardapio/porcoes"><img src={Porção} /></a>
        <NavLink title="Porções" path="/cardapio/porcoes" includes />
      </div>  

      <div>
        <a href="/cardapio/drinks"><img src={Drinks} /></a>
        <NavLink title="Drinks" path="/cardapio/drinks" includes />
      </div>

      <div>
        <a href="/cardapio/drinks"><img src={vacaatolada} type='cardapio'/></a>
        <NavLink title="Caldos" path="/cardapio/vacaatolada" includes />
      </div>

      <div>
        <a href="/cardapio"><img src={tropeiro} type='cardapio'/></a>
        <NavLink title="Drinks" path="/cardapio/drinks" includes />
      </div>
        
        
    </Container>
  );
}

export default Category;
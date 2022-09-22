import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: fixed;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.primary};

  img{
    display: none;
  }

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
  }

  div {
    display: flex;
    font-size: 0.9rem;
    padding: 0.7rem;
  }



  button{
    display: none;
  }

  @media (max-width: 531px) {

    img{
      display: flex;
      width: 11rem;
    }

    ul {
      display: none;
    }

    div {
      display: none;
      justify-content: flex-end;
      padding: 0.7rem;
    }

    button{
      display: flex;
      padding: 0.3rem;
      margin-right: 0.5rem;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;
      
    &:hover {
      text-transform: uppercase;
      font-size: 20px; 
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.primary)};
    }
  }
`;
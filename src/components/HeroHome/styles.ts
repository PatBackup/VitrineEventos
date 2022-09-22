import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  > img {
    width: 30rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      position: absolute;
      width: 50rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1056px) {
    > img {
      position: absolute;
      width: 40rem;
    }
  }

  @media (max-width: 895px) {
    > img {
      width: 30rem;
    }
  }
  
  @media (max-width: 735px) {
    > img {
      width: 22rem;
    }
  }


  @media (max-width: 607px) {
    > img {
      width: 18rem;
    }
  }


  @media (max-width: 572px) {
    > img {
      width: 22rem;
    }
  }


  @media (max-width: 479px) {
    > img {
      position: relative;
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }

    @media (max-width: 531px) {
      display: none;
    }

  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.background};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;

export const Image1 = styled.img`
  top: 22rem;
  width: 40rem;
  flex: 1;
  left: 0rem;

  @media (max-width: 1450px) {
    left: 0rem;
  }

  @media (max-width: 764px) {
    left: -2rem;
  }

  @media (max-width: 607px) {
    left: 0rem;
  }

  @media (max-width: 572px) {
    left: -3rem;
  }

  @media (max-width: 531px) {
    top: 10rem;
    left: -4rem;
  }

  @media (max-width: 479px) {
    top: -2rem;
    left: 0rem;
  }

  @media (max-width: 350px) {
    top: -2rem;
    left:-1rem;
  }
`;


export const Image2 = styled.img`
  top: 22rem;
  width: 40rem;
  flex: 1;
  left: 14rem;

  @media (max-width: 1450px) {
    left: 12rem;
  }

  @media (max-width: 764px) {
    left: 7rem;
  }

  @media (max-width: 607px) {
    left: 11rem;
  }

  @media (max-width: 572px) {
    left: 6rem;
  }

  @media (max-width: 531px) {
    top: 10rem;
    left: 2rem;
  }

  @media (max-width: 479px) {
    top: -2rem;
    left: 0rem;
  }

  @media (max-width: 350px) {
    top: -2rem;
    left:-1rem;
  }

`;

export const Image3 = styled.img`
  top: 22rem;
  width: 40rem;
  flex: 1;
  left: 24rem;
  
  @media (max-width: 1450px) {
    left: 18rem;
  }

  @media (max-width: 764px) {
    left: 15rem;
  }

  @media (max-width: 607px) {
    left: 18rem;
  }

  @media (max-width: 572px) {
    left: 12rem;
  }

  @media (max-width: 531px) {
    top: 10rem;
    left: 7rem;
  }

  @media (max-width: 479px) {
    top: -2rem;
    left: 0rem;
  }

  @media (max-width: 320px) {
    top: -2rem;
    left:-1rem;
  }

`;


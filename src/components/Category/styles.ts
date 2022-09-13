import { lighten } from 'polished';
import styled from 'styled-components';


interface ImgLinkProps {
    isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;   
  justify-content: space-between;
  margin: 5rem 5rem ;
  gap: 7rem;


  >div{
    border-radius: 1.5rem;
    flex-direction: column;
    width: 12rem;
    height: 18rem;
    line-height: 2;
    box-shadow: 9px 9px ${({ theme }) => theme.primary};

    img{
      height: 18rem;
      border-radius: 2rem;
      transition: 0.5s;
      
      &:hover {
          transform: scale(1.3) rotate(7.0deg);
          cursor: pointer;
      }
      
    }
  }

  @media (max-width: 700px) {

    margin: 4.5rem 2rem ;

    >div{
      border-radius: 1.5rem;
      flex-direction: column;
      height: 15rem;
      

      img{
        height: 15rem;
      }
    }

  }

  
  @media (max-width: 623px) {

    gap: 3.5rem;

    >div{
      border-radius: 1.5rem;
      flex-direction: column;
      height: 15rem;
      
    
      img{
        height: 15rem;
      }
    }
  }

  @media (max-width: 567px) {
    
    justify-content: center;
    gap: 7rem;

    >div{
      border-radius: 1.5rem;
      flex-direction: column;
      height: 15rem;
      
    
      img{
        height: 15rem;
      }
    }
  }




`;


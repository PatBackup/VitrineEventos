import styled from 'styled-components';
import theme from '../../styles/theme';


export const Container = styled.div`
    width: 300px;
    margin:7% auto;
    border-radius: 25px;
    background-color: rgba(0,0,0,0.1);
    box-shadow: 0 0 17px ${({ theme }) => theme.primary};
    flex-direction: column;
    align-items: center;

    @media (max-width: 333px) {
        margin-left: -1.1rem;
    }

    >main{
        text-align: center;
       
        button{
            width: 250px;
            height: 40px;
            border: 1px solid #fff;
            border-radius: 20px;
            outline: none;
            padding-left: 40px;
            box-sizing: border-box;
            font-size: 15px;
            color: #333;
            margin-bottom: 40px;
            padding-left: 0;
            background-color: #13a430;
            letter-spacing: 1px;
            font-weight: bold;
            margin-bottom: 70px;
        
            &:hover{
                box-shadow: 2px 2px 5px ${({ theme }) => theme.primary};
                background-color: ;
            }
        }

    }



`;



export const Header = styled.header`
    text-align: center;
    padding-top: 75px;


    >h1{
        color: #333;
        font-size: 45px;
        margin-bottom: 80px;
    }
`;

export const Input = styled.input`
    width: 250px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 20px;
    outline: none;
    padding-left: 40px;
    box-sizing: border-box;
    font-size: 15px;
    color: #333;
    margin-bottom: 40px;

    &:hover {
        box-shadow: 2px 2px 5px ${({ theme }) => theme.primary};
        background-color: #ddd;
    }
`;



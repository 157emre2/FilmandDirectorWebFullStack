import styled from "styled-components";
import {Link} from "react-router-dom";

export const ModalTitle = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.backgroundColor};
    padding: 2rem;
    text-align: center;
`;

export const Button = styled.a`
    font-size: 1.6rem;
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme, type }) => theme.button[type].textColor};
    background: ${({ theme, type }) => theme.button[type].backgroundColor};
    border: 1px solid ${({ theme, type }) => theme.button[type].borderColor};
    transition: .3s all;
    
    &:hover{
        color: ${({ theme, type }) => theme.button[type].hoverTextColor};
        background: ${({ theme, type }) => theme.button[type].hoverBackgroundColor};
        cursor: pointer;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.backgroundColor};
    padding: 1rem;
    color: ${({ theme }) => theme.textColor};
    ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        li{
            padding: 1rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme, type }) => theme.button[type].textColor};
    border: 1px solid ${({ theme, type }) => theme.button[type].borderColor};
    padding: 1rem;
    font-size: 1.3rem;
    border-radius: 20px;
    transition: .3s all;
    
    &:hover{
        color: ${({ theme, type }) => theme.button[type].hoverTextColor};
        background: ${({ theme, type }) => theme.button[type].hoverBackgroundColor};
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${({ theme }) => theme.backgroundColor};
    padding: 1rem;
    label{
        font-size: 1.5rem;
        margin: 1rem;
        color: ${({ theme }) => theme.textColor}
    }
    input{
        font-size: 1.5rem;
        margin: 1rem;
        padding: .5rem;
    }
    button{
        font-size: 1.5rem;
        margin: 1rem;
        padding: 1rem;
        border: none;
        border-radius: 20px;
        background: ${({ theme }) => theme.button.primary.backgroundColor};
        color: ${({ theme }) => theme.button.primary.textColor};
        align-self: flex-end;
        width: 20%;
        transition: .3s all;
        
        &:hover{
            background: ${({ theme }) => theme.button.primary.hoverBackgroundColor};
            color: ${({ theme }) => theme.button.primary.hoverTextColor};
            cursor: pointer;
        }
    }
`;

export const H2Title = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.backgroundColor};
    padding: 2rem;
    text-align: center;
`;

export const AddDivStyle = styled.div`
    width: fit-content;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
`;

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    li{
        margin: 1rem;
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.button.primary.borderColor};
        border-radius: 20px;
        background: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.textColor};
        transition: .3s all;
        
        &:hover{
            background: ${({ theme }) => theme.button.primary.hoverBackgroundColor};
            color: ${({ theme }) => theme.button.primary.hoverTextColor};
            cursor: pointer;
            
            p{
                    background: ${({ theme }) => theme.button.primary.hoverBackgroundColor};
                    color: ${({ theme }) => theme.button.primary.hoverTextColor};
                    cursor: pointer;
            }
        }
    }
    
`;

export const H3Title = styled.h3`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.backgroundColor};
    padding: 2rem;
    text-align: center;
    
    border-radius: 20px;
    transition: .3s all;

    &:hover{
        background: ${({ theme }) => theme.button.primary.hoverBackgroundColor};
        color: ${({ theme }) => theme.button.primary.hoverTextColor};
        cursor: pointer;
    }
`;

export const StyledP = styled.p`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.backgroundColor};
    padding: .5rem;
    text-align: center;
`;

export const StyledContainer = styled.div`
    background: ${({ theme }) => theme.bodyBackgroundColor};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
`;

export const StyledInput = styled.input`
    font-size: 1.5rem;
    margin: 1rem;
    padding: .5rem;
    border: 1px solid ${({ theme }) => theme.button.primary.hoverBackgroundColor};
    border-radius: 20px;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: .3s all;
    
    &:focus{
        outline: none;
        border: 1px solid ${({ theme }) => theme.button.primary.borderColor};
        
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 5rem;
`;

export const H3TitleV2 = styled.h3`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.backgroundColor};
    padding: 2rem;
    text-align: center;
    border-radius: 20px;

`;
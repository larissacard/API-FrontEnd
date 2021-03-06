import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    width: 3.25rem;
    height: 3.25rem;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    border: none;
    outline: none;
    transition-duration: .2s;
    
    img{
        width: 1.5rem;
        height: 1.5rem;
        align-self: center;
    }

    &:hover{
        transform: scale(1.1);
        transition-duration: .2s;
    }
`;

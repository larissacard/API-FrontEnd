import styled, { css } from 'styled-components';

import {
    Brisanet,
    Projetos,
    Equipes,
    Tarefas,
    Pessoas,
} from '../../styles/Icons'


export const Container = styled.div `
    background-color: var(--roxo);
    height: calc(100% - 48px);
    width: 16.67%;
    min-width: 200px;
    margin: 24px 10px 24px 24px;
    border-radius: 24px;

    display: flex;
    flex-direction: column;

    @media (max-width: 1280px) {
        min-width: 65px;
    }
`;

export const ContLogo = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
`;

export const Logo = styled(Brisanet)`
    width: 90%;
    height: auto;
`;

export const NavMenu = styled.div `
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    > a {
        text-decoration: none;
    }
`;

export const MenuButton = styled.div `
    display: flex;
    align-items: center;
    font-size: 20px;

    transition-duration: .3s;

    > span {
        margin-left: 15px;
        color: var(--cinza1);
    }

    @media (max-width: 1280px) {
        > span {
            display: none;
        }
    }

    :hover {
        transform: scale(1.05);
        transition-duration: .3s;
    }
`;

const iconCSS = css`
    height: 50px;
    width: 50px;

    path {
        fill: var(--cinza1);
    }

    @media (max-width: 1280px) {
        height: 40px;
        width: 40px;
    }
`; 

export const ImgTarefas = styled(Tarefas)`${iconCSS}`;
export const ImgProjetos = styled(Projetos)`${iconCSS}`;
export const ImgEquipes = styled(Equipes)`${iconCSS}`;
export const ImgPessoas = styled(Pessoas)`${iconCSS}`;

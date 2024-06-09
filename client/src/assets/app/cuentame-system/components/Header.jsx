import React, { useState } from 'react';
import styled from 'styled-components';
import logoCuentame from '../assets/logoC1.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {

    const location = useLocation();
    const [active, setActive] = useState(false);
    
    const toggleSections = () => {
        setActive(!active);
      };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <Navbar>
                <Logo href='/inicio'>
                    <img src={logoCuentame} alt="logoCuentame" />
                </Logo>
                <Icon  onClick={toggleSections}><GiHamburgerMenu /></Icon>
                <Sections active={active}>
                    <Options to='/inicio' active={isActive('/inicio')}>Inicio</Options>
                    <Options to='/nosotros' active={isActive('/nosotros')}>Nosotros</Options>
                    <Options to='/cuentos' active={isActive('/cuentos')}>Cuentos</Options>
                    <Options to='/contacto' active={isActive('/contacto')}>Contacto</Options>
                </Sections>
            </Navbar>
        </>
    )
}

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
`;

const Logo = styled.a`
    display: flex;
    height: 100px;
    cursor: pointer;
`;

const Icon = styled.div`
    display: none;
    
    @media(max-width: 660px){
        display:block;
        cursor: pointer;
    }
`;

const Sections = styled.div`
    padding: 0rem 1rem;
    display: flex;
    gap: 20px;

    @media(max-width: 660px){
        padding: 2rem;
        top: 12vh;
        position: fixed;
        z-index: 1;
        right: 0;
        width: 30%;
        background: #8e6e6e1c;
        backdrop-filter: blur(10px);
        flex-direction: column;
        right: ${props => (props.active ? '0' : '-100%')}; /* Muestra u oculta las secciones */
        transition: right 0.3s; 
    }
`;

const Options = styled(Link)`
    position: relative;
    color:#000;
    font-weight: 500;
    text-decoration: none;
    margin-left: 40px;
    
    &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: ${props => (props.active ? '100%' : '0')};
        height: 2px;
        background: #646cff ;
        transition: .3s;
    }

    &:hover::before {
        width: 100%;
      }
`;
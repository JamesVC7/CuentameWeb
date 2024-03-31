import React from 'react';
import styled from 'styled-components';

export default function Footer() {

	return (
        <>
        <Navbar>
        <p>&copy;Todos los derechos reservados James Vasquez</p>
        </Navbar>
        </>
	)
}

const Navbar = styled.div`
    display: flex;
    justify-content: center;
`;
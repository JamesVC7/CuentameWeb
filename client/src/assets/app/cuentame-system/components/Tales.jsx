import React from 'react';
import styled from 'styled-components';

export default function Tales({text, href, imagenUrl}) {

	return (
    <Link href={href} >
		<ContTale>
      <Espan imagenurl={imagenUrl}></Espan>
			<TextCategory>{text}</TextCategory>
		</ContTale>
    </Link>
    
	)
}

const Espan = styled.span`
  display: block;
  background-image: url(${props => props.imagenurl});
  background-size: cover;
  background-position: center;
  position:absolute;
  overflow:hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 10%;
  transition: 0.5s ease-in-out;

  &:hover{
    height: 100%
  }
`;

const TextCategory = styled.p`
  color: #ffff;
  margin-top: 40%;
`;

const ContTale = styled.div`
  position: relative;
  width: 200px;
  height: 216px;
  background: linear-gradient(45deg, #924910, #510505);
  cursor: pointer;
  overflow: hidden;
  
`;

const Link = styled.a`
  text-decoration: none;
`;
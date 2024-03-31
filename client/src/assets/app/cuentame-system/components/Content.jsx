import React from 'react';
import styled,{ keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-30px) rotate(6deg);
  }
  30% {
    transform: translateX(15px) rotate(-6deg);
  }
  45% {
    transform: translateX(-15px) rotate(3.6deg);
  }
  60% {
    transform: translateX(9px) rotate(-2.4deg);
  }
  75% {
    transform: translateX(-6px) rotate(1.2deg);
  }
`;

const ContCategory = styled.div`
    padding: 5rem;
    background: linear-gradient(65deg, #f31010, #a7b61b,#65ff88);
    cursor: pointer;
    transition: all 0.5s;
    
    &:hover {
      background-image: url(${props => props.imageurl});
      background-size: cover;
      background-position: center;
      background-color: transparent;
      animation: ${fadeInAnimation} 1s both;
    }  
`;

export default function Content({text, href, imageUrl}) {

  
	return (
    <Link href={href} >
		<ContCategory imageurl={imageUrl}>
			<TextCategory>{text}</TextCategory>
		</ContCategory>
    </Link>
	)
}

const TextCategory = styled.p`
  color: #ffff;
  filter: brightness(1.75);
`;

const Link = styled.a`
  text-decoration: none;
`;
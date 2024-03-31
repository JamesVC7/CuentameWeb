import React, { useState, useEffect } from "react";
import Content from "../components/content";
import styled,{ keyframes } from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import fondoPrincipal from "../assets/fondoPrincipal.png"

const fadeInAnimation = keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px) translateY(-300px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`;

export default function Introduction() {
  const [categorias, setCategorias] = useState([]);
  
  useEffect(() => {
    // Realiza una solicitud a la ruta del servidor para obtener las categorías
    fetch("http://localhost:3001/categorias")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
    })
      .catch((error) => {
        console.error("Error al obtener datos del servidor", error);
      });
  }, []);
  
  const generateCategoryUrl = (categoria) => {
    // Reemplaza espacios en blanco y caracteres especiales en el nombre de la categoría
    const urlFriendlyName = categoria.nombre.toLowerCase().replace(/\s+/g, '-');
    return `/${urlFriendlyName}/${categoria.id_categoria}`;
  };  

    return (
      <>
      <ContentBox>
      <Header/>
      <Cont>
      <Title>CUENTAME</Title>
      <FirstColumn>
      {categorias.map((categoria) => (
              <Content key={categoria.id_categoria} text={categoria.nombre} href={generateCategoryUrl(categoria)} 
              imageUrl={`http://localhost:3001/imagen/${categoria.id_categoria}`}/>
            ))
            }          
      </FirstColumn>
      </Cont>
      </ContentBox>
      <Footer/>
        </>
    );
}

const FirstColumn = styled.div`
   display: flex;
   gap: 80px;
   padding: 2rem 5rem;
   flex-wrap: wrap;
   justify-content: center;
   max-width: 1280px;
`;

const ContentBox = styled.div`
    background-image: url(${fondoPrincipal});
    background-size: cover;
`;

const Cont = styled.div`
    max-width: 1280px;
    margin: auto;
`;

const Title = styled.h1`
   display: flex;
   padding: 1rem;
   font-size: clamp(16px, 3vw, 32px);
   animation: ${fadeInAnimation} 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
   justify-content: center;
   font-family: 'Irish Grover', cursive;
`;

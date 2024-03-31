import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styled,{ keyframes } from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tales from "../components/Tales";

const fadeInAnimation = keyframes`
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
`;

export default function Category({title}) {
  const { id_categoria } = useParams();
  const [cuentos, setCuentos] = useState([]);

  useEffect(() => {
    // Realizar solicitud GET al servidor Express para obtener cuentos por categoría
    fetch(`http://localhost:3001/cuentos-por-categoria/${id_categoria}`)
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado con los datos de los cuentos
        setCuentos(data);
      })
      .catch((error) => {
        console.error('Error al obtener cuentos por categoría', error);
      });
  }, [id_categoria]);

  return (
    <>
      <Header />
      <Cont>
      <Title>{title}</Title>
      <FirstColumn>
      {cuentos.map((cuento, index) => (
            <Tales key={index} text={cuento.nombre} href={`/cuento/${cuento.id_cuento}`} 
            imagenUrl={`http://localhost:3001/imagen-cuento/${cuento.id_cuento}`}/>
          ))}
      </FirstColumn>
      </Cont>
      <Footer />
    </>
  );
}


const Cont = styled.div`
    max-width: 1280px;
    margin: auto;
`;

const FirstColumn = styled.div`
   display: flex;
   gap: 80px;
   padding: 2rem 0rem;
   flex-wrap: wrap;
   justify-content: center;
`;

const Title = styled.div`
   display: flex;
   padding: 1rem;
   font-size: clamp(16px, 3vw, 24px);
   animation: ${fadeInAnimation} 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`;


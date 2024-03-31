import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GrNext } from 'react-icons/gr';
import { MdArrowBackIosNew } from 'react-icons/md';

export default function Readings() {
  const { id_cuento } = useParams();
  const [images, setImages] = useState([]); // Para almacenar las imágenes
  const [startIndex, setStartIndex] = useState(0); // Índice de la primera imagen a mostrar
  const [cuentoNombre, setCuentoNombre] = useState(''); // Estado para el nombre del cuento

  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener las imágenes según el id_cuento
    fetch(`http://localhost:3001/paginas-por-cuento/${id_cuento}`)
      .then((response) => response.json())
      .then((data) => {
        // Establece las imágenes en el estado
        setImages(data);
      })
      .catch((error) => {
        console.error('Error al obtener imágenes por cuento', error);
      });

    // Realiza una solicitud GET al servidor para obtener el nombre del cuento según el id_cuento
    fetch(`http://localhost:3001/nombre-cuento/${id_cuento}`)
      .then((response) => response.json())
      .then((data) => {
        setCuentoNombre(data.nombre);
      })
      .catch((error) => {
        console.error('Error al obtener el nombre del cuento', error);
      });
  }, [id_cuento]); // Asegúrate de proporcionar el id_cuento

  const handlePrevClick = () => {
    if (startIndex >= 2) {
      setStartIndex(startIndex - 2);
    }
  };

  const handleNextClick = () => {
    if (startIndex + 2 < images.length) {
      setStartIndex(startIndex + 2);
    }
  };

  return (
    <>
      <Header />
      <Title>{cuentoNombre}</Title>
      <TaleBox>
        <BottonPass onClick={handlePrevClick}><MdArrowBackIosNew /></BottonPass>
        <Border>
          {images.slice(startIndex, startIndex + 2).map((imagen) => (
            <LineTale1  key={imagen.id_imagen}>
              <Pages src={`http://localhost:3001/imagen-paginas/${imagen.id_imagen}`} alt="Imagen de cuento" />
            </LineTale1>
          ))}
        </Border>
        <BottonPass onClick={handleNextClick}><GrNext /></BottonPass>
      </TaleBox>
      <Footer />
    </>
  );
}

const TaleBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem 0rem;
`;

const Title = styled.h1`
   font-family: 'Jost';
   font-size: clamp(16px, 3vw, 24px);
   text-transform: uppercase;
`;

const Border = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    border: 10px solid #a31d1d;
    flex-wrap: wrap;
`;

const LineTale1 = styled.div`
    border: 2px solid;
    border-radius: 0rem 1rem 1rem 0rem;
    width: 49%;
    @media(max-width:750px){
      width:100%;
    }
`;

const LineTale2 = styled.div`
    border: 2px solid;
    border-radius: 1rem 0rem 0rem 1rem;
`;

const BottonPass = styled.div`
   cursor: pointer;
   font-size: 2rem;
`;

const Pages = styled.img`
    width: 100%;
    height: 500px;
    border-radius: 1rem 0rem 0rem 1rem;
    @media(max-width: 950px) and (min-width: 750px){
      height:400px;
    }
    @media(max-width: 550px){
      height:auto;
    }
`;


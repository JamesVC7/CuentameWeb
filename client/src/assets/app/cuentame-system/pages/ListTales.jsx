import { useState, useEffect } from 'react';
import styled,{ keyframes } from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tales from "../components/Tales";
import { BsSearch } from 'react-icons/bs';

const fadeInAnimation = keyframes`

    0% {
      letter-spacing: -0.5em;
              transform: translateZ(-800px);
              filter: blur(12px);
      opacity: 0;
    }
    100% {
              transform: translateZ(0);
              filter: blur(0);
      opacity: 1;
    }
  
`;

export default function ListTales() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Función para manejar cambios en el campo de búsqueda
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Realizar la solicitud al servidor cuando cambia el término de búsqueda
  useEffect(() => {
    // Realiza una solicitud al servidor para buscar cuentos por nombre
    fetch(`http://localhost:3001/buscar-cuentos?nombre=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error al buscar cuentos', error);
      });
  }, [searchTerm]);

  return (
    <>
      <Header />
      <Cont>
        <Title>Busca tu cuento favorito</Title>
        <SearchContainer>
          <SearchInput type='text' placeholder='Buscar cuento' value={searchTerm}
            onChange={handleSearchInputChange}/>
          <SearchIcon><BsSearch /></SearchIcon>
        </SearchContainer>
        <FirstColumn>
        {searchResults.map((cuento, index) => (
            <Tales key={index} text={cuento.nombre} href={`/cuento/${cuento.id_cuento}`}
            imagenUrl={`http://localhost:3001/imagen-cuento/${cuento.id_cuento}`} />
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 1rem;
  border: 2px solid;
  border-radius: 2rem;
  font-size: 18px;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0; 
  border-radius: 2rem;
  margin-left: -2rem; 
  cursor: pointer;
`;

const FirstColumn = styled.div`
  display: flex;
  gap: 80px;
  padding: 2rem 0rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: clamp(16px, 3vw, 24px);
  font-family: 'Niramit';
  margin: 2rem;
  animation: ${fadeInAnimation} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;


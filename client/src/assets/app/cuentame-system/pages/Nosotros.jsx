import React from "react";
import styled,{ keyframes } from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Book from "../assets/bookN.jpg"
import Children from "../assets/childrenN.jpg"

const scaleInCenter = keyframes`
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

export default function Nosotros() {
    
    return (
      <>
      <Header/>
      <Cont>
      <Title>Nosotros</Title>
      <Column1>
      <Text1>
        <Title1>Cuentame</Title1><Title2>hará volar tu imaginación</Title2><br/>
        Esta pagina es adecauada para todas las personas, de todas las edades
        que quieran tener una experiencia diveritda y emocionante con los cuentos
        que se encuentran en nuestro catalago.
        odio officiis, a at dolores debitis provident rerum, perferendis,
         expedita praesentium accusantium sed laudantium.
      </Text1>
      <ImgColum1 src={Book}></ImgColum1>
      </Column1>
      <Column1>
      <ImgColum2 src={Children}></ImgColum2>
      <Text1>
      <Title3><Title1>Activa</Title1><Extract>tus</Extract><Title1>habilidades</Title1></Title3><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Consequatur totam, facilis minus beatae quibusdam nam? Nam 
        odio officiis, a at dolores debitis provident rerum, perferendis,
         expedita praesentium accusantium sed laudantium.
      </Text1>
      </Column1>
      </Cont>
      <Footer/>
        </>
    );
}

const Cont = styled.div`
    max-width: 1280px;
    margin: auto;
    padding: 2rem;
`;

const Title = styled.div`
    background: linear-gradient(
        50deg,
        rgba(255, 255, 255, 0.4) 12%,
        rgba(255, 255, 255, 0.1) 77%
    );
    background-blend-mode: ;
    box-shadow: 0px 4px 24px 1px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(5px);
    font-size: clamp(20px, 3vw, 40px);
    width: 30%;
    margin: auto;
    padding: 1rem;
    margin-bottom: 2rem;
    font-family: "Jost";
`;

const Column1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;
    justify-content: center;
`;

const Text1 = styled.div`
    width: 50%;
    font-size: clamp(14px, 3vw, 22px);
    text-align: initial;
    @media(max-width: 500px){
        width: 100%;
    }
`;

const Title1 = styled.p`
    font-family: 'Inter';
    font-weight: 900;
    font-size: clamp(22px, 3vw, 52px);
    margin:0;
    margin-top: 2rem;
`;

const Title2 = styled.p`
    font-family: 'Inter';
    font-weight: 500;
    font-size: clamp(22px, 3vw, 48px);
    margin:0;
`;

const Title3 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
`;

const Extract = styled.p`
    font-family: 'Inter';
    font-weight: 500;
    font-size: clamp(22px, 3vw, 52px);
    margin:0;
    margin-top: 2rem;
`;

const ImgColum1 = styled.img`
    width: 40%;
    animation: ${scaleInCenter} 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @media(max-width: 500px){
        width: 100%;
    }
`;

const ImgColum2 = styled.img`
    width: 40%;
    @media(max-width: 500px){
        width: 100%;
    }
`;
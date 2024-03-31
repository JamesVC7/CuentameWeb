import React, { useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Inputs from "../components/Inputs";

export default function Contact() {
  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  // Restablecer los valores de los campos a cadenas vacías después de enviar el formulario
  const resetFormFields = () => {
    setFormData({
      nombre: '',
      correo: '',
      mensaje: '',
    });
  };

  // Manejar cambios en los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud POST al servidor para insertar los datos en la tabla "Contacto"
    fetch('http://localhost:3001/insertar-contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Realiza acciones después de que se haya enviado el formulario, si es necesario
        console.log('Datos insertados en la tabla Contacto:', data);

        // Restablecer los valores de los campos a cadenas vacías
        resetFormFields();
      })
      .catch((error) => {
        console.error('Error al insertar datos en la tabla Contacto', error);
      });
  };

  return (
    <>
      <Header />
      <Title>Tienes dudas, contáctanos</Title>
      <Form onSubmit={handleSubmit}>
        <Inputs
          name={'nombre'} // Agrega el atributo "name" para identificar el campo en el estado
          text={'Nombre'}
          type={'text'}
          required={true}
          value={formData.nombre} // Asigna el valor desde el estado
          onChange={handleInputChange} // Maneja cambios en el campo
        />
        <Inputs
          name={'correo'} // Agrega el atributo "name" para identificar el campo en el estado
          text={'Correo Electrónico'}
          type={'email'}
          required={true}
          value={formData.correo} // Asigna el valor desde el estado
          onChange={handleInputChange} // Maneja cambios en el campo
        />
        <Inputs
          name={'mensaje'} // Agrega el atributo "name" para identificar el campo en el estado
          text={'Mensaje'}
          type={'text'}
          required={true}
          value={formData.mensaje} // Asigna el valor desde el estado
          onChange={handleInputChange} // Maneja cambios en el campo
        />
        <ButtonSend type="submit">Enviar</ButtonSend>
      </Form>
      <Footer />
    </>
  );
}

const moveColor = keyframes`

    0%{
      background: #61dafb;
    }
    100%{
      background:  #8726e5;
    }
  
`;

const ButtonSend = styled.button`
   display: flex;
   padding: 1rem;
   width: 50%;
   justify-content:center;
   color: white;
   font-family: 'Istok Web';
   margin: 2rem 0rem;
   cursor:pointer;
   transition: 2s;
   border: 0.35rem solid;
   animation: ${moveColor} 2s linear infinite alternate both;
`;

const Title = styled.h1`
   display: flex;
   padding: 1rem 0rem;
   font-size: clamp(22px, 3vw, 52px);
   font-family: 'Istok Web';
   padding: 0rem 3rem;
`;

const Form = styled.form`
    padding: 0rem 4rem;
    width: 40%
`;
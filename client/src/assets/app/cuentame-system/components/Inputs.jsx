import React from 'react';
import styled from 'styled-components';

export default function Inputs({text, type, required, name, value, onChange}) {
    
	return (
        <>
        <InputBox>
        <IptTitle>{text}</IptTitle>
        <InputLine type={type} name= {name} required={required} value={value} onChange={onChange}></InputLine>
        </InputBox>
        </>
	)
}

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem;
`;

const IptTitle = styled.p`
    text-align: initial;
    font-family: 'Niramit';
`;

const InputLine = styled.input`
    border: none;
    border-bottom: 1.5px solid black;
    padding: 0.5rem 0rem;
    outline: none;
    font-size: 18px;
    background-color: transparent;
`;
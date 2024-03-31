import React from "react";
import Category from "./Category";

export default function Clasics() {
  const classicsTales = [
    { text: 'Clasicos', href: '/caperucita' },
    { text: 'Originales', href: '#' },
    { text: 'Graciosos', href: '#' },
    { text: 'Originales', href: '#' },
    { text: 'Graciosos', href: '#' },
    { text: 'Originales', href: '#' },
    { text: 'Graciosos', href: '#' },
    { text: 'Originales', href: '#' },
  ];

  return <Category title="CLASICOS" tales={classicsTales} />;
}




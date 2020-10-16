import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar"
import ChatBar from "./components/ChatBar"
import Contactos from "./components/Contactos"

function App() {
  const estados = {
    activo:"activo",
    ausente: "ausente",
    ocupado: "ocupado",
  }
  const servers = [
    {
      image: `${process.env.PUBLIC_URL}/Brachypelma-hamorii.jpg`,
    },
    {
      image: `${process.env.PUBLIC_URL}/cornfed.png`,
    },
    {
      image: `${process.env.PUBLIC_URL}/juorgullosa.jpg`,
    },
    {
      image:`${process.env.PUBLIC_URL}/kid-bastion.jpg`,
    },
    {
      image:`${process.env.PUBLIC_URL}/life.jpg`,
    },
    {
      image:`${process.env.PUBLIC_URL}/madre.jpg`,
    },
    {
      image:`${process.env.PUBLIC_URL}/mamimi.jpg`,
    },
    {
      image:`${process.env.PUBLIC_URL}/maxresdefault.jpg`,
    },
    {
      image:`${process.env.PUBLIC_URL}/Nacho_Enero_2020_color.jpg`,
    },
    {
      image:`${process.env.PUBLIC_URL}/navidad 2.png`,
    },
    {
      image:`${process.env.PUBLIC_URL}/Poecilotheria metallica.png`,
    },
    {
      image:`${process.env.PUBLIC_URL}/punpun.jpg`,
    },

  ];
  const people = [
    {
      image: `${process.env.PUBLIC_URL}/Brachypelma-hamorii.jpg`,
      nickname: "Hamorii",
      estado: estados.activo,
    },
    {
      image: `${process.env.PUBLIC_URL}/cornfed.png`,
      nickname: "Cornfed",
      estado: estados.ocupado,
    },
    {
      image: `${process.env.PUBLIC_URL}/juorgullosa.jpg`,
      nickname: "JU!",
      estado: estados.ausente,
    },
    {
      image:`${process.env.PUBLIC_URL}/kid-bastion.jpg`,
      nickname: "Kid",
    },
    {
      image:`${process.env.PUBLIC_URL}/life.jpg`,
      nickname: "Pepito",
    },
    {
      image:`${process.env.PUBLIC_URL}/madre.jpg`,
      nickname: "Tiamat",
    },
    {
      image:`${process.env.PUBLIC_URL}/mamimi.jpg`,
      nickname: "Mamimi",
    },
    {
      image:`${process.env.PUBLIC_URL}/maxresdefault.jpg`,
      nickname: "BlackRainbow",
    },
    {
      image:`${process.env.PUBLIC_URL}/Nacho_Enero_2020_color.jpg`,
      nickname: "Cheryl",
    },
    {
      image:`${process.env.PUBLIC_URL}/navidad 2.png`,
      nickname: "Mamimibis",
    },
    {
      image:`${process.env.PUBLIC_URL}/Poecilotheria metallica.png`,
      nickname: "P.Metallica",
    },
    {
      image:`${process.env.PUBLIC_URL}/punpun.jpg`,
      nickname: "PunPun",
    },

  ];

  return (
    <>
      <Sidebar servers={servers}/>
      <ChatBar people={people}/>
      <Contactos/>
     
    </>
  );
}

export default App;
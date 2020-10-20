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
      id:1,
      image: `${process.env.PUBLIC_URL}/Brachypelma-hamorii.jpg`,
    },
    {
      id:2,
      image: `${process.env.PUBLIC_URL}/cornfed.png`,
    },
    {
      id:3,
      image: `${process.env.PUBLIC_URL}/juorgullosa.jpg`,
    },
    {
      id:4,
      image:`${process.env.PUBLIC_URL}/kid-bastion.jpg`,
    },
    {
      id:5,
      image:`${process.env.PUBLIC_URL}/life.jpg`,
    },
    {
      id:6,
      image:`${process.env.PUBLIC_URL}/madre.jpg`,
    },
    {
      id:7,
      image:`${process.env.PUBLIC_URL}/mamimi.jpg`,
    },
    {
      id:8,
      image:`${process.env.PUBLIC_URL}/maxresdefault.jpg`,
    },
    {
      id:9,
      image:`${process.env.PUBLIC_URL}/Nacho_Enero_2020_color.jpg`,
    },
    {
      id:10,
      image:`${process.env.PUBLIC_URL}/navidad 2.png`,
    },
    {
      id:11,
      image:`${process.env.PUBLIC_URL}/Poecilotheria metallica.png`,
    },
    {
      id:12,
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
      estado: estados.activo,
    },
    {
      image:`${process.env.PUBLIC_URL}/life.jpg`,
      nickname: "Pepito",
      estado: estados.activo,
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
      <Contactos people={people}/>
     
    </>
  );
}

export default App;
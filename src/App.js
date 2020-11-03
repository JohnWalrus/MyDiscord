import React from 'react';
import USER_STATUS from './constants/user_status';
import SERVERS from './constants/servers';
import './App.css';
import Sidebar from "./components/Sidebar"
import ChatBar from "./components/ChatBar"
import Contactos from "./components/Contactos"

function App() {
  
  const people = [
    {
      image: `${process.env.PUBLIC_URL}/Brachypelma-hamorii.jpg`,
      nickname: "Hamorii",
      estado: USER_STATUS.activo,
    },
    {
      image: `${process.env.PUBLIC_URL}/cornfed.png`,
      nickname: "Cornfed",
      estado: USER_STATUS.ocupado,
    },
    {
      image: `${process.env.PUBLIC_URL}/juorgullosa.jpg`,
      nickname: "JU!",
      estado: USER_STATUS.ausente,
    },
    {
      image:`${process.env.PUBLIC_URL}/kid-bastion.jpg`,
      nickname: "Kid",
      estado: USER_STATUS.activo,
    },
    {
      image:`${process.env.PUBLIC_URL}/life.jpg`,
      nickname: "Pepito",
      estado: USER_STATUS.activo,
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
      <Sidebar servers={SERVERS}/>
      <ChatBar people={people}/>
      <Contactos people={people}/>
     
    </>
  );
}

export default App;

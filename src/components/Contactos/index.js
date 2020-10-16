import React from 'react';
import FriendsButton from '../FriendsButton';
import styles from './style.module.css';

function Contactos(props) {

  return (
    <div className={styles.root}> 
      
      <div className={styles.topbar}>
        <div className={styles.friends}>  
          <span className="material-icons">
            emoji_people
          </span>
          <p>Amigos</p>
        </div>
        <FriendsButton>Amigos</FriendsButton>
        <FriendsButton>Todos</FriendsButton>
        <FriendsButton>Pendiente</FriendsButton>
        <FriendsButton>Bloqueado</FriendsButton>
        <FriendsButton>Añadir Amigo</FriendsButton>
        

      </div>
      
    </div>
  );
}


export default Contactos;
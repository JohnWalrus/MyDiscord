import React from 'react';
import FriendsButton from '../FriendsButton';
import styles from './style.module.css';
import SettingButton from '../SettingButton'

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
          <div className={styles.spacebar}/>
          <FriendsButton>Amigos</FriendsButton>
          <FriendsButton>Todos</FriendsButton>
          <FriendsButton>Pendiente</FriendsButton>
          <FriendsButton>Bloqueado</FriendsButton>
          <FriendsButton>Añadir Amigo</FriendsButton>
          <SettingButton icon="chat"/>
          <div className={styles.spacebar}/>
          <SettingButton icon="inbox"/>
          <SettingButton icon="help"/>
          
        </div>

        <div className={styles.botbox}>

          <div className={styles.onlinelist}>
              
          </div>

          <div className={styles.activenow}>

          </div>
        
        </div>
      
    </div>
  );
}


export default Contactos;
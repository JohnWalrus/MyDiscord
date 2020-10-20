import React from 'react';
import FriendsButton from '../FriendsButton';
import styles from './style.module.css';
import SettingButton from '../SettingButton';
import Avatar from '../Avatar';

function Contactos({people=[]}) {

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
            {people.filter(person=>person.estado).map((person, i) => <div className={styles.contact} key={i}>
              <div className={styles.content}>
                <div className={styles.conperson}>
                  <Avatar image={person.image} estado={person.estado}/>
                  <p>{person.nickname}</p>
                </div>
                <div className={styles.conicon}>
                  <span className="material-icons">
                    chat_bubble
                  </span>
                  <span className="material-icons">
                    more_vert
                  </span>
                </div>
              </div>

            </div>)}
          </div>

          <div className={styles.activenow}>

          </div>
        
        </div>
      
    </div>
  );
}


export default Contactos;
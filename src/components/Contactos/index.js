import React from 'react';
import FriendsButton from '../FriendsButton';
import styles from './style.module.css';
import Avatar from '../Avatar';

function Contactos({people=[]}) {
  const filteredPeople= people.filter(person=>(person.estado))
  return (
    <div className={styles.root}> 
      
      <div className={styles.topbar}>
          <div className={styles.topone}>
            <div className={styles.friends}>  
              <span className="material-icons">
                emoji_people
              </span>
              <p>Amigos</p>
            </div>
            <div className={styles.spacebar}/>
            <FriendsButton>Conectado</FriendsButton>
            <FriendsButton>Todos</FriendsButton>
            <FriendsButton>Pendiente</FriendsButton>
            <FriendsButton>Bloqueado</FriendsButton>
            <div className={styles.addfriend}>Añadir amigo</div>
          </div>

          <div className={styles.toptwo}>
            <span className="material-icons">
            chat
            </span>
            <div className={styles.spacebar}/>
            <span className="material-icons">
            inbox
            </span>
            <span className="material-icons">
            help
            </span>
          </div>
        </div>

      <div className={styles.botbox}>
          <div className={styles.onlinelist}>
            <div className={styles.conectado}>CONECTADO — {filteredPeople.length}</div>
            {filteredPeople
              .map((person, i) => <div className={styles.contact} key={i}>
                <div className={styles.content}>
                <div className={styles.conperson}>
                  <Avatar image={person.image} estado={person.estado}/>
                  <div className={styles.user_data}>
                    <p className={styles.user_nickname}>{person.nickname}<span className={styles.user_id}>#{i}</span></p>
                    <p className={styles.user_status}>{person.estado}</p>
                  </div>
                </div>
                <div className={styles.conicon}>
                  <span className="material-icons">
                    chat_bubble
                  </span>
                </div>
                <div className={styles.conicon}>
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
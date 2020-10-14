import React from 'react';
import styles from './style.module.css';
import ChatButton from '../ChatButton';
import Person from '../Person';
import SettingButton from '../SettingButton';
import Avatar from '../Avatar';


function ChatBar({people=[]}){

  return (
    <div className={styles.root}>
      <div className={styles.titulo}>
        <button>Busca o inicia una conversación</button>
      </div>
      <div className={styles.lista}>
        <ChatButton icon="emoji_people">Amigos</ChatButton>
        <ChatButton icon="whatshot">Nitro</ChatButton>
        <div className={styles.dms}>
          <h6>MENSAJES DIRECTOS</h6>
          <button className={styles.dmadd}>
              <span className="material-icons">
              add
              </span>
          </button>
        </div>
        {people.map(s => <Person {...s}/>)}
      </div>
      <div className={styles.setting}>
        <Avatar image={`${process.env.PUBLIC_URL}/mamimi.jpg`} estado="activo" />

        <div className={styles.usuario}>
          <button>John Walrus</button>
          <p>Never Knows Best</p>
        </div>
        <SettingButton icon="mic"/>
        <SettingButton icon="headset"/>
        <SettingButton icon="settings"/>

      </div>
      

    </div>
  );
}

export default ChatBar;
import React from 'react';
import styles from './style.module.css';

function ChatButton(props) {

  return (
    <div className={styles.root}>
        <span className="material-icons">
         {props.icon}
        </span>
        <span className={styles.text}>
         {props.children}
        </span>
    </div>
  );
}

export default ChatButton;

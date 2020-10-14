import React from 'react';
import styles from './style.module.css';

function FriendsButton(props) {

  return (
    <div className={styles.root}>
        <span className={styles.text}>
         {props.children}
        </span>
    
    </div>
  
    );
}

export default FriendsButton;
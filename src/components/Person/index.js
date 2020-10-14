import React from 'react';
import styles from './style.module.css';
import Avatar from '../Avatar';

function Person(props) {

  return (
    <div className={styles.root}> 
      <Avatar image={props.image} estado={props.estado}/>
      <div className={styles.nickname}>
        {props.nickname}
      </div>
      <div className={styles.ievil}> 
         <span class="material-icons">
           clear
         </span>
      </div>
    </div>
  );
}


export default Person;

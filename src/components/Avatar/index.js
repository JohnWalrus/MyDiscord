import React from 'react';
import styles from './style.module.css';
import classNames from 'classnames';

function Avatar(props) {
  const buttonStyle={
     backgroundImage: `url('${props.image}')`,
  }
   
  return (
    <div className={styles.root}> 
      <div className={styles.avatar} style={buttonStyle}>
        <div className={
          classNames(styles.estado, props.estado && styles[props.estado] )
          }/>
  
      </div>
    </div>
  );
}


export default Avatar;
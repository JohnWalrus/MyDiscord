import React from 'react';
import styles from './style.module.css';

function ServerButton(props) {
  const buttonStyle={
     backgroundImage: `url('${props.image}')`,
     backgroundSize: "cover" 
    };
  if(props.size)
    buttonStyle.backgroundSize=`${props.size}%`
   
  return (
    <div className={styles.root} style={buttonStyle}>
    </div>
  );
}

export default ServerButton;

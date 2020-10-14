import React from 'react';
import styles from './style.module.css';

function SideIcon(props) {
 
  return (
    <div className={styles.root}>
      <span className="material-icons">
      {props.icon}
      </span>
    </div>
  );

}

export default SideIcon;
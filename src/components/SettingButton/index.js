import React from 'react';
import styles from './style.module.css';

function SettingButton(props) {

  return (
    <div className={styles.root}>
        <span className="material-icons">
         {props.icon}
        </span>
    </div>

  );
}

export default SettingButton;

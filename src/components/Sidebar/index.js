import React from 'react';
import styles from './style.module.css';
import ServerButton from '../ServerButton';
import SideIcon from '../SideIcon';

function Sidebar({servers=[]}) {
  return (
    <aside className={styles.sidebar}>
      <ServerButton image={`${process.env.PUBLIC_URL}/dislogo.png`} size={60}/>
      <hr/>
      {servers.map(s => <ServerButton image={s.image} key={s.id}/>)}
      <SideIcon icon="add"/>
      <SideIcon icon="explore"/>
      <SideIcon icon="sports_kabaddi"/>


    </aside>
  );
}

export default Sidebar;
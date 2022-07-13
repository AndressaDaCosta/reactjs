import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=50"
        alt=""
      />

      <div className={styles.profile}>
        <img className={styles.avatar}
          src="https://github.com/AndressaDaCosta.png"
        />
        <strong>Andressa da Costa</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={15} /*color="blueviolet"*//>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}

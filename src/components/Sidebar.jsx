import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1597638533602-d20720b2b9cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNTU4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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

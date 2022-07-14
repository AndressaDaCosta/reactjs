import styles from './Post.module.css';



   export function Post() {
    return (
      <article>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://github.com/diego3g.png" />
              <div className={styles.authorInfo}>
                <strong>Diogo Fernandes</strong>
                  <span>Web Developer</span>
              </div>
          </div>
          <time 
            title='13 de Julho as 23:53h' 
            dateTime='2022-07-13 23:53:12'>
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 {' '}<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a> {' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
          </p>
        </div>

     
        <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}










// // ****** Named Exports

// export function Post(props) {
//   return (
//     <div>
//       <strong>{props.author}</strong>
//       <p>{props.content}</p>
//     </div>
//   )
// }
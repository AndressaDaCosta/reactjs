// ****** Named Exports

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar'



import './global.css';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Andressa Da Costa"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum veniam, a possimus sit, asperiores corporis facere neque amet consequatur in suscipit dicta ad delectus minima rerum nisi, placeat obcaecati voluptatibus?"
          />

          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  )
}

//componente: funçao que retorna html

// JSX = Javascript + XML

// *******Defaut Exports*********

// import Post from "./Post";

// function App() {
//   return (
//   <div>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//   </div>
//   )
// }

// export default App

/*import PostComponent from "./Post";

function App() {
  return (
  <div>
    <PostComponent/>
    <PostComponent/>
    <PostComponent/>
    <PostComponent/>
    <PostComponent/>
     </div>  
  )
}

export default App

------- function Post() {
  return 
  <p> Post</p>
}

export default Post */

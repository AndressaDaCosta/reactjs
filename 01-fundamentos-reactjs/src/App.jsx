// ****** Named Exports

import { Header } from '../components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header/>

      <Post
        author="Andressa Da Costa"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum veniam, a possimus sit, asperiores corporis facere neque amet consequatur in suscipit dicta ad delectus minima rerum nisi, placeat obcaecati voluptatibus?"
      />

      <Post
       author="Gabriel Buzzi"
       content="Um novo post muito legal" 
      />
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

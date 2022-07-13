// ****** Named Exports

import { Post } from "./Post";

export function App() {
  return (
  <div>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
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

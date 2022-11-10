import React, { useState } from 'react';
import { Estatus } from './components/Estatus';
import { Posteos } from './components/Posteos';
import "./index.css"
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

const App = () => {

  // ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
  const [totalLikes, setTotalLikes] = useState(0);

  // MÉTODOS: App debe tener un método para aumentary este número  que pueda ser ejecutado por su nieto Post.
  const handleTotalLike = () => {
      setTotalLikes(totalLikes => totalLikes + 1)
  } 

  // PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

  return (
      <body>
          <nav>
              <Estatus totalLikes = {totalLikes}/>
          </nav>
              <Posteos handleTotalLike = {handleTotalLike}/>
      </body>
  )
}

export default App

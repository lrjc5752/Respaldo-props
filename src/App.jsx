import React from 'react';
import Bienvenida from "./components/Bienvenida"
import Cards from "./components/Cards"
function App() {
  return (
    <div>
      <h1>Propiedades de los Componentes</h1>
     { /* <Bienvenida nombre="Luis" apellido="jimenez"></Bienvenida>
      <Bienvenida nombre="Rafael"></Bienvenida>
      <Bienvenida nombre="Jimenez"></Bienvenida>
      <Bienvenida nombre="Celis"></Bienvenida>*/}
      <hr />
       <div className="row">
          <div className="col">
            <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Titulo Card 1"
            texto="Texto de Card Uno"    
          />
          </div>
          <div className="col">
            <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Titulo Card 2"
            texto="Texto de Card Dos"    
          />
          </div>
          <div className="col">
            <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Titulo Card 3"
            texto="Texto de Card Tres"    
          />
          </div>
       </div>
    </div>
  );
}

export default App;

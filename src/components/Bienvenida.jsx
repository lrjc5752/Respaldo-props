import React from 'react';

const  Bienvenida = (props)=> {
    console.log(props)
    const {nombre} = props // usando el  object destructuring , mejor practica, 
                          //props es un objeto y nombre es uno de sus atributos
  return (
    <div>
        {/*<h2>Bienvenido {props.nombre}</h2>*/}
        <h2>Bienvenido {nombre}</h2>
    </div>
  );
}

export default Bienvenida;

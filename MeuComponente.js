import React from 'react';


function MeuComponente(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  );
}


export default MeuComponente;
function MiBoton({texto, color}) {
    const estilo = {
        backgroundColor: color, 
        color: '#ffffff',
            padding: '10px 20px',
            margin: '10px',    
        // Verde
        border: 'none', };

  return (
    <button style={estilo}>{texto}</button>
  )
} export {MiBoton}
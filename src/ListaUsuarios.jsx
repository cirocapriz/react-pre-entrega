import React from 'react'

function ListaUsuarios() {

    const usuarios=['Silvia','Luis','Matias','Sabrina','Ana']
        
  return (
    <>  
    
    <div>ListaUsuarios</div>
    <ul>
        {usuarios.map((usuario) => (
            <li key={usuario}>{usuario}</li>
        ))}
    </ul>
        </>
  )
}
export default ListaUsuarios

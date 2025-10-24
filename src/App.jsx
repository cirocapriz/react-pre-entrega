
import './App.css'
import { MiBoton } from './MiBoton.jsx'
import ListaUsuarios from './ListaUsuarios.jsx'


function App() {
  

  return (
    <>
    <h1 className="titulo">Comenzando con react</h1> 
    <h2>Clase 2</h2> 
    <MiBoton texto="Botón rojo" color="#c51a1a"/>
    <MiBoton texto="Botón verde" color="#3bce1e"/>
    <ListaUsuarios />
    
    </>
       
  )
}

export default App

function Subtitulo() {
  

  return (
    
    <h2>Talento tech</h2> 
    
       
  )
}

export {Subtitulo}

function Boton() {
  

  return (
    
    <button onClick={() => alert("Hola Mundo")}>Click</button> 
    
       
  )
}

export {Boton}


import './App.css'
import { MiBoton } from './MiBoton.jsx'
import ListaUsuarios from './ListaUsuarios.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact";


function App() {
  

  return (
    
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>





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

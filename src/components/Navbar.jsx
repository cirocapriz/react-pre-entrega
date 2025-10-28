import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#0077cc"
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.8rem 1rem",
        borderBottom: "1px solid #ccc"
      }}
    >
      <h2>MiTienda</h2>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Catálogo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/carrito"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Carrito
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
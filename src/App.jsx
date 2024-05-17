import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [logueado, setLogueado] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarPassword(evento) {
    setPassword(evento.target.value);
  }

  function ingresar() {
    if (usuario === 'admin' && password === 'admin') {
      alert('Validación correcta, Ingresaste');
      setLogueado(true);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }

  return (
    <>
      {logueado ? (
        <>
          <br />
          <h2>Menú</h2>
          <input type="text" id="Menú" />
          <button>Buscar</button>
          
          <section>Comidas</section> 
          <br />
          <img src={reactLogo} alt="Comidas" />
          <br />
          <button>Confirmar</button>
          <button>Cancelar</button>

          <section>Bebidas</section> 
          <br />
          <img src={reactLogo} alt="Bebidas" />
          <br />
          <button>Confirmar</button>
          <button>Cancelar</button>

          <section>Promociones</section> 
          <br />
          <img src={reactLogo} alt="Promociones" />
          <br />
          <button>Confirmar</button>
          <button>Cancelar</button>

          <section>Compartir</section> 
          <br />
          <img src={reactLogo} alt="Compartir" />
          <br />
          <button>Compartir con amigos</button>
          <button>Cancelar</button>
        </>
      ) : (
        <>
        <h1>Inicio de Sesión</h1>
          <input
            placeholder='Usuario o Email'
            type="text"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange={cambiarUsuario}
          />
          <input
            placeholder='Contraseña'
            type="password"
            name="clave"
            id="password"
            value={password}
            onChange={cambiarPassword}
          />
          <button onClick={ingresar}>Ingresar</button>
        </>
      )}
    </>
  );
}

export default App;

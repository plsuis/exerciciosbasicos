import './App.css';
import Boton from './componentes/Boton';
import Encabezado from './componentes/Encabezado';
import FuncionsBoton from './componentes/FuncionsBoton';
import Saudo from './componentes/Saudo';

function App() {
  return (
    <div className="App">
      <Encabezado>
        <Saudo />
        <Boton />
        <FuncionsBoton />
      </Encabezado>
    </div>
  );
}

export default App;

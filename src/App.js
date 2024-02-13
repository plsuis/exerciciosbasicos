import './App.css';
import Boton from './componentes/Boton';
import Principal from './componentes/Principal';
import FuncionsBoton from './componentes/FuncionsBoton';
import Saudo from './componentes/Saudo';
import Encabezado from './componentes/Encabezado';
import Footer from './componentes/Footer';
import Imaxen from './componentes/Imaxen';
import BotonConComponente from './componentes/BotonConComponente';
import ImaxenConBotonVerNoVer from './componentes/ImaxenConBotonVerNoVer';
import EditarInput from './componentes/EditarInput';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Principal>
        <BotonConComponente>
          <Saudo />
        </BotonConComponente>
        <Boton />
        <FuncionsBoton />
        <Imaxen />
        <ImaxenConBotonVerNoVer />
        <EditarInput />
      </Principal>
      <Footer />
    </div>
  );
}

export default App;

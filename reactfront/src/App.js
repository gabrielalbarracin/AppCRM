import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompShuwPedidos from './pedidos/ShowPedidos'
import CompCreatePedido from './pedidos/CreatePedidos'
import Login from './login/auth';
import Home from './home/home';
import Configuracion from './configuracion/config'
import Logistica from './logistica/logistica'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/pedidos' element={ <CompShuwPedidos/>} />
            <Route path='/configuracion' element={ <Configuracion/>} />
            <Route path='/logistica' element={ <Logistica/>} />
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

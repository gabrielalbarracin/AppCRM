import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DataTableCrudDemo from './pedidos/ShowPedidos'
import CompCreatePedido from './pedidos/CreatePedidos'
import Login from './login/auth';
import Home from './home/home';
import Configuracion from './configuracion/config'
import Logistica from './logistica/logistica'
import PedidoSecos from './pedidos/Secos';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/pedidos' element={ <DataTableCrudDemo/>} />
            <Route path='/configuracion' element={ <Configuracion/>} />
            <Route path='/PedidosSecos' element={ <PedidoSecos/>} />
            <Route path='/logistica' element={ <Logistica/>} />
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

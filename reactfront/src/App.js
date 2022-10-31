import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DataTableCrudDemo from './pedidos/ShowPedidos'
import CompCreatePedido from './pedidos/CreatePedidos'
import Login from './login/auth';
import Home from './home/home';
import Configuracion from './configuracion/config'
import Logistica from './pedidos/Logistica'
import PedidoSecos from './pedidos/Secos';
import Telefono from './pedidos/Telefono'
import Transporte from './pedidos/Transporte'
import Combustible from './pedidos/Combustible'
import Prueba from './pedidos/Transporte/Prueba'
import CompCreatePedidoPrueba2 from './pedidos/Transporte/CreatePrueba2'
import CompEditStock from './pedidos/Transporte/EditPrueba'
import CompVerPrueba from './pedidos/Transporte/VerPrueba';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/Verprueba/:id' element={ <CompVerPrueba/>} /> 
        <Route path='/Editprueba/:id' element={ <CompEditStock/>} />  
        <Route path='/Createprueba' element={ <CompCreatePedidoPrueba2/>} />
        <Route path='/prueba' element={ <Prueba/>} />
            <Route path='/telefono' element={ <Telefono/>} />
            <Route path='/combustible' element={ <Combustible/>} />
            <Route path='/transporte' element={ <Transporte/>} />
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

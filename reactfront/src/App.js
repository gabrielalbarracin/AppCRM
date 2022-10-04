import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompShuwPedidos from './pedidos/ShowPedidos'
import CompCreatePedido from './pedidos/CreatePedidos'
import Login from './login/auth';
import Home from './home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/pedidos' element={ <CompShuwPedidos/>} />
             <Route path='/Nuevopedidos' element={ <CompCreatePedido/>} />
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

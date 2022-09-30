import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompShuwPedidos from './pedidos/ShowPedidos'
//import CompCreatePedido from './pedidos/CreatePedidos'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/pedidos' element={ <CompShuwPedidos/>} />
            {/* <Route path='/Nuevopedidos' element={ <CompCreatePedido/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

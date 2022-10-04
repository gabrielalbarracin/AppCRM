import './css/home.css'
import { Button } from 'reactstrap'
import san from './img/san.png'
const Home = () =>{

      
    return(
        
    <div className='reportes'>
        <div className='navbar2' >
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src={san} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    </a>
                    <a><i className="user fa-solid fa-user"></i></a>
                </div>
            </nav>
        </div>   
            
        <div className='acciones'> 
                    <div className="card1 w-30" >
                        <a href='/pedidos'> <button >
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-gear"></i>Configuracion</h5>
                            <p className="card-tex card-text">formularios</p>
                        </div>
                        </button> </a>
                   </div>
                   
                   <div className="card1 w-30">
                    <a href='/pedidos'>  <button >
                        <div className="card-body" >
                            <h3 className="card-title"><i className="icono fa-solid fa-truck"></i>Logistica</h3>
                            <p className="card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'> <button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-carrot"></i>Frescos</h5>
                            <p className="card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'><button href="/Nuevopedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-sharp fa-solid fa-lemon"></i>Secos</h5>
                            <p className="card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'><button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-phone"></i>Telefono</h5>
                            <p className="card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'> <button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-clipboard"></i>Informes</h5>
                            <p className="card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>
               </div>
            
        </div>       
    )
}

export default Home
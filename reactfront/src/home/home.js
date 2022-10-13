import './css/home.css'
import { Button } from 'reactstrap'
import san from './img/san.png'


//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { PanelMenu } from 'primereact/panelmenu';
import { PrimeIcons } from 'primereact/api';
import 'primeicons/primeicons.css';


const Home = () =>{


      
    return(
        
    <div className='reportes'>




    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="menu mb-3">
          <Container fluid>
            {/* <Navbar.Brand href="#" className='titulomenu'>Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle className='menu' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='menu2'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              position='left'
             
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/configuracion"><i className=" fa-solid fa-gear"></i>Configuracion</Nav.Link>
                  <Nav.Link href="/informes"><i className=" fa-solid fa-clipboard"></i>Informes</Nav.Link>
                  <NavDropdown
                    title="Reportes"
                    id={`offcanvasNavbarDropdown-expand-${expand}`} >
                   
                    <NavDropdown.Item href="/pedidos">Frescos</NavDropdown.Item>
                    <NavDropdown.Item href="/PedidosSecos">Secos</NavDropdown.Item>
                    <NavDropdown.Item href="/logistica">Logistica</NavDropdown.Item>
                    <NavDropdown.Item href="/telefono">Telefono</NavDropdown.Item>


                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

      

{/* <PanelMenu  style={{width:'300px'}}/>

      {[false,].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

   
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}

        
              {/* <NavDropdown
                   
                    title="Formularios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >

                <NavDropdown.Item href="/pedidos">Frescos</NavDropdown.Item>
                <NavDropdown.Item href="/pedidos">Secos</NavDropdown.Item>
                <NavDropdown.Item href="/logistica">Logistica</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Telefono</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item href="/configuracion"><i className="fa-solid fa-gear"></i>Configuracion</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Transporte</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Informes</NavDropdown.Item> */}
                {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  
                </Form> */}
        


            
        <div className='acciones'> 
                    <div className="card1 w-30" >
                        <a href='/configuracion'> <button >
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-gear"></i>Configuracion</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button> </a>
                   </div>
                   
                   <div className="card1 w-30">
                    <a href='/logistica'>  <button >
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-truck"></i>Logistica</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'> <button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-carrot"></i>Frescos</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/PedidosSecos'><button href="/Nuevopedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-sharp fa-solid fa-lemon"></i>Secos</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'><button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-phone"></i>Telefono</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'> <button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-clipboard"></i>Informes</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>
               </div>
            
        </div>       
    )
}

export default Home
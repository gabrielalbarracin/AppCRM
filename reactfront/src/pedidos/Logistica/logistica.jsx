import axios from 'axios'
import { useState, useEffect, Component } from 'react'
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './Logistica.css'
const URI = 'http://localhost:9000/logistica/'

class Logistica extends Component {
    // const [transportes, setPedido] = useState([])
    // useEffect( ()=>{
    //     getPedidos()
    // },[])
    
    // //procedimiento para mostrar todos los pedidos
    // const getPedidos = async () => {
    //     const res = await axios.get(URI)
    //     setPedido(res.data)
    // }

    // //procedimiento para eliminar un pedido
    // const deleteTransporte = async (id) => {
    //    await axios.delete(`${URI}${id}`)
    //     getPedidos()
    // }
    state={
        data:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
            id:'',
            categoria: '',
            articulos: '',
            cantidad: '',
            fecha_entrega: ''
          }
        }
        peticionGet=()=>{
            axios.get(URI).then(response=>{
              this.setState({data: response.data});
            }).catch(error=>{
              console.log(error.message);
            })
            }
            
            peticionPost=async()=>{
              delete this.state.form.id;
             await axios.post(URI,this.state.form).then(response=>{
                this.modalInsertar();
                this.peticionGet();
              }).catch(error=>{
                console.log(error.message);
              })
            }
            
            peticionPut=()=>{
              axios.put(URI+this.state.form.id, this.state.form).then(response=>{
                this.modalInsertar();
                this.peticionGet();
              })
            }
        
            peticionDelete=()=>{
                axios.delete(URI+this.state.form.id).then(response=>{
                  this.setState({modalEliminar: false});
                  this.peticionGet();
                })
              }
              modalInsertar=()=>{
                this.setState({modalInsertar: !this.state.modalInsertar});
              }
              
              seleccionarEmpresa=(transporte)=>{
                this.setState({
                  tipoModal: 'actualizar',
                  form: {
                    id: transporte.id,
                    categoria: transporte.categoria,
                    articulos: transporte.articulos,
                    cantidad: transporte.cantidad,
                    fecha_entrega: transporte.fecha_entrega
                  }
                })
              }
              
              handleChange=async e=>{
              e.persist();
              await this.setState({
                form:{
                  ...this.state.form,
                  [e.target.name]: e.target.value
                }
              });
              console.log(this.state.form);
              }
              
                componentDidMount() {
                  this.peticionGet();
                }
render(){
const {form}=this.state;
    return(
        <>
        <div className='homelog'>
        <Home/> 
        </div>

    <div className="logistica">
        
        <div className='cabezeralogistica'>
          {/* <Link to='/CreatePedidoLogistica' className="btnNuevo btn btn-success mr-2 btn-sm"><i className='fas fa-plus'></i></Link> */}
          <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><FontAwesomeIcon icon={faPlus}/></button>
          <h5 className='titulolog'>Maestro de logistica</h5>
        </div>
        
        <div className='btnexportarlog'>
            <button className='expo'><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
            <button className='expo'><i className="fa-sharp fa-solid fa-file-excel"></i></button>
        </div>
        {/* <Button className="btnNuevo btn btn-success mr-2 btn-sm" type='submit' onClicks={handleShow} />  */}
         <div className='containertablalog'>
           <div className='row'>
            <div className='col'>
            <Table striped bordered hover className='tablalog' size="sm">
                    <thead >
                        <tr className='accioneslog'>
                            <th>Id</th>
                            <th>Categoria</th>
                            <th className='campolog'>Articulos</th>
                            <th className='campolog'>Cantidad</th>
                            <th className='campolog'>Fech entrega</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='acciones2'>
                    {this.state.data.map (transporte => {
                        return(
                        <tr>
                            <td>{transporte.id}</td>
                            <td>{transporte.categoria}</td>
                            <td className='campolog'>{transporte.articulos}</td>
                            <td className='campolog'>{transporte.cantidad}</td>
                            <td className='campolog'>{transporte.fecha_entrega}</td>
                            <td>
                                <button className="btn " onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                {"   "}
                                <button className="btn " onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </td>
                        </tr>
                        )
                        })}
                    </tbody>
                    {/* <tbody className='acciones2'>
                        {transportes.map ( (transporte) => (
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.descripcion}</td>
                                <td>{transporte.marca}</td>
                                <td>{transporte.modelo}</td>
                                <td>{transporte.patente}</td>
                                <td className=''>
                                    <div className='btnacciones'>
                                        <Link to={`/Verprueba/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-magnifying-glass"></i></Link>
                                        <Link to={`/EditPedidosFrescos/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() =>deleteTransporte(transporte.id)} className='botonesacciones btn'><i className="fa-solid fa-trash"></i></button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                </Table>

                <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
                    <input  type='date' name='fecha_entrega' className=" form-control" id='fecha_entrega' onChange={this.handleChange} value={form?form.fecha_entrega: ''} required={true}></input>
                    <br/>
                    <select className="categoriasecos form-select" name='categoria' id='categoria' onChange={this.handleChange} value={form?form.categoria: ''} required={true}>
                    <option selected>Seleccione categoria</option>
                        <option value="1">Cosas de cama</option>
                        <option value="2">Cosas de cocina</option>
                        <option value="3">Otros</option>
                </select>
                    <br />
                    <select className="categoriasecos form-select" name='articulos' id='articulos' onChange={this.handleChange} value={form?form.articulos: ''} required >
                          <option selected>Seleccione articulo</option>
                          <option value="1">Platos</option>
                          <option value="2">Cuchillos</option>
                          <option value="3">Vasos</option>
                      </select>
                    <br />
                    <label htmlFor="capital_bursatil">Ingrese cantidad</label>
                    <input className="form-control" type="text" name="cantidad" id="cantidad" onChange={this.handleChange} value={form?form.cantidad:''} required={true}/>
                  </div>
                </ModalBody>
                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la pedido: {form && form.id}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
            </div>
        </div>
     </div>
</div>
</>
    )
}
}

export default Logistica
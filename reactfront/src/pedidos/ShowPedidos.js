// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'
// //import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
// import Button from 'react-bootstrap/Button';
  import './css/style.css'
 import CompCreatePedido from './CreatePedidos'
// const URI = 'http://localhost:9000/pedidos/'

// const CompShuwPedidos = () => {
//     const [pedidos, setPedido] = useState([])
//     useEffect( ()=>{
//         getPedidos()
//     },[])
    
//     //procedimiento para mostrar todos los pedidos
//     const getPedidos = async () => {
//         const res = await axios.get(URI)
//         setPedido(res.data)
//     }

//     //procedimiento para eliminar un pedido
//     const deletePedido = async (id) => {
//        await axios.delete(`${URI}${id}`)
//         getPedidos()
//     }

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return(
//         <>
//         <div className='container'>
//             <div className='row'>
                
//                     <div className='titulofrescos'>
//                     <Button className='btn-volver' href='/home'><i className="fa-solid fa-arrow-left"></i></Button>
//                     <Button variant='success' onClick={handleShow} to="/pedidos"  className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Button>
                    
//                     <table className='table'>
//                         <thead className='table-primary'>
//                             <tr>
//                                <th>Id</th> 
//                                <th>Operario</th>
//                                <th>Fecha pedido</th>
//                                <th>Fecha entrega</th>
//                                <th>Acciones</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {pedidos.map ((pedido) =>(
//                                <tr key={pedido.id}>
//                                     <td>{pedido.id}</td>
//                                     <td>{pedido.operario}</td>
//                                     <td>{pedido.fecha_carga}</td>
//                                     <td>{pedido.fecha_entrega}</td>
//                                     <td>
                                        
//                                         <button  className='btn-acciones btn btn-success btn-sm'><i className="fa-solid fa-magnifying-glass"></i></button> 
//                                         <Link to={`/edit/${pedido.id}`} className='btn-acciones btn btn-info btn-sm'><i className="fa-solid fa-pen-to-square"></i></Link>
//                                         <button onClick={()=>deletePedido(pedido.id)} className='btn-acciones btn btn-danger btn-sm'><i className="fa-solid fa-trash"></i></button>
                                        
//                                     </td>
//                                </tr> 
//                             ))}
//                         </tbody>
//                     </table>

//                 </div>
//             </div>
//         </div> 
//         <CompCreatePedido show={show} handleClose={handleClose}/>
//         </>
//     )
// }

// export default CompShuwPedidos



import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
//import './DataTableDemo.css';

const DataTableCrudDemo = () => {

    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = {...product};
            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    }

    const editProduct = (product) => {
        setProduct({...product});
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            const importedData = data.map(d => {
                d = d.split(',');
                const processedData = cols.reduce((obj, c, i) => {
                    c = c === 'Status' ? 'inventoryStatus' : (c === 'Reviews' ? 'rating' : c.toLowerCase());
                    obj[c] = d[i].replace(/['"]+/g, '');
                    (c === 'price' || c === 'rating') && (obj[c] = parseFloat(obj[c]));
                    return obj;
                }, {});

                processedData['id'] = createId();
                return processedData;
            });

            const _products = [...products, ...importedData];

            setProducts(_products);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _product = {...product};
        _product['category'] = e.value;
        setProduct(_product);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = {...product};
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = {...product};
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment className='hola'>
                <Button icon="pi pi-plus" className="btnNuevo p-button-success mr-2 btn-sm" onClick={handleShow} />
                {/* <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} /> */}
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment >
                {/* <FileUpload mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" chooseLabel="Import" className="mr-2 inline-block" onUpload={importCSV} />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} /> */}
            </React.Fragment>
        )
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={`images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className="tabla table-header">
            <h5 className="mx-0 my-1">Productos frescos</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <div className="datatable-crud-demo">
            <Toast ref={toast} />

            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                    <Column field="code" header="Id" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="name" header="Nombre" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="name" header="Cantidad" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="name" header="Fecha" sortable style={{ minWidth: '16rem' }}></Column>
                    {/* <Column field="image" header="Image" body={imageBodyTemplate}></Column> */}
                     {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>  */}
                    <Column field="category" header="Descripcion" sortable style={{ minWidth: '10rem' }}></Column>
                    {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>

            {/* <Dialog visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={`images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>

                <div className="field">
                    <label className="mb-3">Category</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price">Price</label>
                        <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity">Quantity</label>
                        <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
                    </div>
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>*/}
             <CompCreatePedido show={show} handleClose={handleClose}/>
        </div> 
    );
}

export default DataTableCrudDemo



// import React, { useState, useEffect, useRef } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { ToggleButton } from 'primereact/togglebutton';
// import { CustomerService } from '../service/CustomerService';
// //import './DataTableDemo.css';

// const DataTableScrollDemo = () => {

//     const [customers1, setCustomers1] = useState([]);
//     const [customers2, setCustomers2] = useState([]);
//     const [customersGrouped, setCustomersGrouped] = useState(null);
//     const [lockedCustomers, setLockedCustomers] = useState([]);
//     const [unlockedCustomers, setUnlockedCustomers] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [dialogVisible, setDialogVisible] = useState(false);
//     const [balanceFrozen, setBalanceFrozen] = useState(false);
//     const customerService = new CustomerService();

//     useEffect(() => {
//         setLoading(true);

//         customerService.getCustomersLarge().then(data => { setCustomers1(data); setLoading(false); });
//         customerService.getCustomersMedium().then(data => { setCustomers2(data) });
//         customerService.getCustomersMedium().then(data => { setUnlockedCustomers(data) });
//         customerService.getCustomersMedium().then(data => { setCustomersGrouped(data) });

//         setLockedCustomers([
//             {
//                 id: 5135,
//                 name: "Geraldine Bisset",
//                 country: {
//                     name: "France",
//                     code: "fr"
//                 },
//                 company: "Bisset Group",
//                 status: "proposal",
//                 date: "2019-05-05",
//                 activity: 0,
//                 representative: {
//                     name: "Amy Elsner",
//                     image: "amyelsner.png"
//                 }
//             }
//         ]);
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps

//     const openDialog = () => {
//         setDialogVisible(true);
//     }

//     const closeDialog = () => {
//         setDialogVisible(false);
//     }

//     const dialogFooterTemplate = () => {
//         return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />
//     }

//     const balanceTemplate1 = (rowData) => {
//         return formatCurrency(rowData.balance);
//     }

//     const balanceTemplate2 = (rowData) => {
//         return (
//             <span className="font-bold">
//                 {formatCurrency(rowData.balance)}
//             </span>
//         )
//     }

//     const lockTemplate = (rowData, options) => {
//         const icon = options.frozenRow ? 'pi pi-lock' : 'pi pi-lock-open';
//         const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

//         return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />
//     }

//     const countryTemplate = (rowData) => {
//         return (
//             <React.Fragment>
//                 <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
//                 <span className="image-text">{rowData.country.name}</span>
//             </React.Fragment>
//         )
//     }

//     const statusTemplate = (rowData) => {
//         return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
//     }

//     const headerTemplate = (rowData) => {
//         return (
//             <React.Fragment>
//                 <img alt={rowData.representative.name} src={`images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
//                 <span className="image-text">{rowData.representative.name}</span>
//             </React.Fragment>
//         );
//     }

//     const footerTemplate = (rowData) => {
//         return <td className="font-bold">Total Customers: {calculateCustomerTotal(rowData.representative.name)}</td>;
//     }

//     const formatCurrency = (value) => {
//         return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//     }

//     const calculateCustomerTotal = (name) => {
//         let total = 0;

//         if (customersGrouped) {
//             for (let customer of customersGrouped) {
//                 if (customer.representative.name === name) {
//                     total++;
//                 }
//             }
//         }

//         return total;
//     }

//     const toggleLock = (data, frozen, index) => {
//         let _lockedCustomers, _unlockedCustomers;

//         if (frozen) {
//             _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
//             _unlockedCustomers = [...unlockedCustomers, data];
//         }
//         else {
//             _unlockedCustomers = unlockedCustomers.filter((c, i) => i !== index);
//             _lockedCustomers = [...lockedCustomers, data];
//         }

//         _unlockedCustomers.sort((val1, val2) => {
//             return val1.id < val2.id ? -1 : 1;
//         });

//         setLockedCustomers(_lockedCustomers);
//         setUnlockedCustomers(_unlockedCustomers);
//     }

//     return (
//         <div className="datatable-scroll-demo">
//             <div className="card">
//                 <h5>Vertical</h5>
//                 <DataTable value={customers1} scrollable scrollHeight="400px" loading={loading}>
//                     <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
//                     <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
//                     <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
//                     <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
//                 </DataTable>
//             </div>

//             <div className="card">
//                 <h5>Flexible Scroll</h5>
//                 <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
//                     Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

//                 <Button label="Show" icon="pi pi-external-link" onClick={openDialog} />
//             </div>

//             <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal
//                 contentStyle={{ height: '300px' }} onHide={closeDialog} footer={dialogFooterTemplate}>
//                 <DataTable value={customers1} scrollable scrollHeight="flex">
//                     <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
//                     <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
//                     <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
//                     <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
//                 </DataTable>
//             </Dialog>

//             <div className="card">
//                 <h5>Horizontal and Vertical with Footer</h5>
//                 <DataTable value={customers2} scrollable scrollHeight="400px" loading={loading} scrollDirection="both">
//                     <Column field="id" header="Id" footer="Id" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
//                     <Column field="name" header="Name" footer="Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
//                     <Column field="country.name" header="Country" footer="Country" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
//                     <Column field="date" header="Date" footer="Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
//                     <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate1} style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
//                     <Column field="company" header="Company" footer="Company" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
//                     <Column field="status" header="Status" footer="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
//                     <Column field="activity" header="Activity" footer="Activity" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
//                     <Column field="representative.name" header="Representative" footer="Representative" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
//                 </DataTable>
//             </div>

//             <div className="card">
//                 <h5>Frozen Rows</h5>
//                 <DataTable value={unlockedCustomers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" loading={loading}>
//                     <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
//                     <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
//                     <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
//                     <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
//                     <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
//                 </DataTable>
//             </div>

//             <div className="card">
//                 <h5>Frozen Columns</h5>
//                 <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />

//                 <DataTable value={customers2} scrollable scrollHeight="400px" loading={loading} scrollDirection="both" className="mt-3">
//                     <Column field="name" header="Name" style={{ width: '160px' }} frozen></Column>
//                     <Column field="id" header="Id" style={{ width: '100px' }}></Column>
//                     <Column field="name" header="Name" style={{ width: '200px' }}></Column>
//                     <Column field="country.name" header="Country" style={{ width: '200px' }}></Column>
//                     <Column field="date" header="Date" style={{ width: '200px' }}></Column>
//                     <Column field="company" header="Company" style={{ width: '200px' }}></Column>
//                     <Column field="status" header="Status" style={{ width: '200px' }}></Column>
//                     <Column field="activity" header="Activity" style={{ width: '200px' }}></Column>
//                     <Column field="representative.name" header="Representative" style={{ width: '200px' }}></Column>
//                     <Column field="balance" header="Balance" body={balanceTemplate2} style={{ width: '120px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
//                 </DataTable>
//             </div>

//             <div className="card">
//                 <h5>Subheader Grouping</h5>
//                 <DataTable value={customersGrouped} rowGroupMode="subheader" groupRowsBy="representative.name"
//                     sortMode="single" sortField="representative.name" sortOrder={1} scrollable scrollHeight="400px"
//                     rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}>
//                     <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
//                     <Column field="country" header="Country" body={countryTemplate} style={{ minWidth: '200px' }}></Column>
//                     <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
//                     <Column field="status" header="Status" body={statusTemplate} style={{ minWidth: '200px' }}></Column>
//                     <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
//                 </DataTable>
//             </div>
//         </div>
//     );
// }

// export default DataTableScrollDemo
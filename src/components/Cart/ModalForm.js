import './ModalForm.scss';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
//Contexto
import CartContext from '../../Context/CartContext';
import { useState } from 'react';
//Firebase
import { collection, addDoc } from 'firebase/firestore';
import database from '../../Utils/data/firebase';

const ModalForm = (props) => {
    //Informacion del cart context
    const { productsOnCart, setProductsOnCart, subTotalPrice, taxesTotal, totalPrice } = useContext(CartContext);
    const [processComplete, setProcessComplete] = useState(false);
    const [orderId, setOrderId] = useState('');

    //Plantilla inicial de la orden
    const newOrder = {
        userInfo: {
            userName: '',
            userLastname: '',
            userEmail: '',
            userPhone: ''
        },
        items: productsOnCart.map((item) => {
            return {
                productId: item.productId,
                productName: item.productName,
                productPrice: item.productPrice,
                quantity: item.quantityToAdd
            }
        }),
        priceDetails: {
            subTotalPrice: subTotalPrice,
            taxesTotal: taxesTotal,
            totalPrice: totalPrice
        }
    };

    const [order, setOrder] = useState(newOrder);
    const { userName, userLastname, userEmail, userPhone } = order.userInfo;

    //Obtenemos los valores de los inputs
    const inputChange = (e) => {
        setOrder({ ...order, userInfo: { ...order.userInfo, [e.target.name]: e.target.value } });
    }

    //Orden para enviar a firebase
    const pushOrderToFirebase = async () => {
        const orderCollection = collection(database, 'orders');
        const orderDoc = await addDoc(orderCollection, order);
        setProcessComplete(true);
        setOrderId(orderDoc.id);
    }

    //Evento del submit
    const submitForm = (e) => {
        let conditionToEval = userName !== '' && userLastname !== '' && userEmail !== '' && userPhone !== '';
        if (conditionToEval) {
            setOrder(order);
            pushOrderToFirebase();
            //Cambiamos la vista
            setProductsOnCart([]);
            setOrder(newOrder);
        }
    }

    //Evitamos el comportamiento por defecto del form
    useEffect(() => {
        document.getElementById('user-info-form').addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }, []);

    return (
        <div id='form-container'>
                <form id='user-info-form' name='user-info-form'>
                    {processComplete ?
                        (
                            <div className='id-wrap'>
                                <h2>Compra realizada con éxito</h2>
                                <div>
                                    <p>Tu compra se proceso con éxito, puedes utilizar el código del pedido para seguir el estado de tu compra.</p>
                                    <p>Id de tu compra: <span>{orderId}</span></p>
                                    <Link to='/catalogue/all'><button className='btn-catalogue'>Terminar</button></Link>
                                </div>
                            </div>
                        ) : (
                            <div className='form-wrap'>
                                <h2>Datos del comprador</h2>
                                <article>
                                    <label>Nombre</label>
                                    <input type='text' placeholder='Nombre' name='userName' onChange={inputChange} value={userName} required autoComplete='off' />
                                </article>
                                <article>
                                    <label>Apellido</label>
                                    <input type='text' placeholder='Apellido' name='userLastname' onChange={inputChange} value={userLastname} required autoComplete='off' />
                                </article>
                                <article>
                                    <label>Número de Teléfono</label>
                                    <input type='tel' placeholder='Teléfono' name='userPhone' onChange={inputChange} value={userPhone} required autoComplete='off' />
                                </article>
                                <article>
                                    <label>Correo Electrónico</label>
                                    <input type='email' placeholder='Correo' name='userEmail' onChange={inputChange} value={userEmail} required autoComplete='off' />
                                </article>
                                <Link to='/cart'>
                                    <button className='btn-back' onClick={props.modalControl}>Volver al carrito</button>
                                </Link>
                                <button type='submit' className='btn-submit' onClick={submitForm}>Realizar Compra</button>
                            </div>
                        )}
                </form>
            </div>
    );
}

export default ModalForm;
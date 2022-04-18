import './ModalForm.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const ModalForm = (props) => {

    useEffect(()=>{
        document.getElementById('user-info-form').addEventListener('submit', (e)=> {
            e.preventDefault();
        });
    }, []);

    return (
        <div id='form-container'>
            <form id='user-info-form' name='user-info-form'>
                <h2>Datos del comprador</h2>
                <article>
                    <label>Nombre</label>
                    <input type='text' placeholder='Nombre' name='user-name' />
                </article>
                <article>
                    <label>Apellido</label>
                    <input type='text' placeholder='Apellido' name='user-lastname' />
                </article>
                <article>
                    <label>Número de Teléfono</label>
                    <input type='tel' placeholder='Teléfono' name='user-phone' />
                </article>
                <article>
                    <label>Correo Electrónico</label>
                    <input type='email' placeholder='Correo' name='user-email' />
                </article>
                <Link to='/cart'>
                    <button className='btn-back' onClick={props.modalControl}>Volver al carrito</button>
                </Link>
                <button type='submit' className='btn-submit'>Realizar Compra</button>
            </form>
        </div>
    );
}

export default ModalForm;
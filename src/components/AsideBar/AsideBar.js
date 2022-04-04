import './AsideBar.scss';
import FilterOption from './FilterOption';
import ProductGama from '../ProductGama/ProductGama';

const dataMuck = [
    { title: 'Todos', count: 13, key: '1', category: 'paymentMethod' },
    { title: 'Pago en cuotas', count: 10, key: '2', category: 'paymentMethod' },
    { title: 'Procesadores', count: 3, key: '3', category: 'productCategory' },
    { title: 'Tarjetas Graficas', count: 3, key: '4', category: 'productCategory' },
    { title: 'Memorias Ram', count: 4, key: '5', category: 'productCategory' },
    { title: 'Coolers y ventiladores', count: 2, key: '6', category: 'productCategory' },
    { title: 'Discos Duros', count: 5, key: '7', category: 'productCategory' },
    { title: 'Otros', count: 6, key: '8', category: 'productCategory' }];

const paymentMethodItems = dataMuck.filter(item => item.category === 'paymentMethod');
const productCategoryItems = dataMuck.filter(item => item.category === 'productCategory');

function AsideBar(Props) {
    return (
        <section id='aside-bar'>
            <div className="welcome-message">
                <h4>Bienvenido a MicroStore</h4>
                <p>Tu tienda de tecnología favorita, donde tenemos todos los componentes  que necesitas.</p>
            </div>
            <article>
                <h4>Método de pago</h4>
                <ul>
                    {paymentMethodItems.map((item) => {
                        return <li key={item.key}><FilterOption Item={item} /></li>
                    })}
                </ul>
            </article>
            <article>
                <h4>Categorias</h4>
                <ul>
                    {productCategoryItems.map((item) => {
                        return <li key={item.key}><FilterOption Item={item}/></li>
                    })}
                </ul>
            </article>
            <article>
                <h4>Gama</h4>
                <ProductGama />
            </article>
        </section>
    );
}

export default AsideBar;
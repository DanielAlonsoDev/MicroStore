import './AsideBar.scss';
import FilterOption from './FilterOption';
import ProductGama from '../ProductGama/ProductGama';
//hhd-ssd

const dataMuck = [
    { title: 'Procesadores', count: 2, key: '1', url: 'cpu'},
    { title: 'Tarjetas Graficas', count: 3, key: '2', url: 'gpu'},
    { title: 'Placas Madre', count: 1, key: '3', url: 'motherboard'},
    { title: 'Discos Duro', count: 1, key: '4', url: 'hhd-ssd'},
    { title: 'Todo', count: 7, key: '5', url: 'all'}];

const productCategoryItems = dataMuck.filter(item => item.category === 'productCategory');

function AsideBar(Props) {
    return (
        <section id='aside-bar'>
            <div className="welcome-message">
                <h4>Bienvenido a MicroStore</h4>
                <p>Tu tienda de tecnología favorita, donde tenemos todos los componentes  que necesitas.</p>
            </div>
            <article>
                <h4>Categorias</h4>
                <ul>
                    {dataMuck.map((item) => {
                        return <li key={item.key}><FilterOption Item={item}/></li>
                    })}
                </ul>
            </article>
        </section>
    );
}

export default AsideBar;
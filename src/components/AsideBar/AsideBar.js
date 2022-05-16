import './AsideBar.scss';
import FilterOption from './FilterOption';
import { getCategories } from '../../Utils/data/GetProducts';
import { useEffect, useState } from 'react';

const AsideBar = (Props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories(setCategories);
    }, []);

    return (
        <section id='aside-bar'>
            <div className="welcome-message">
                <h4>Bienvenido a MicroStore</h4>
                <p>Tu tienda de tecnología favorita, donde tenemos todos los componentes  que necesitas.</p>
            </div>

            <article>
                <h4>Categorias</h4>
                <ul>
                    {categories.map((item) => {
                        return <li key={item.key}><FilterOption Item={item} /></li>
                    })}
                </ul>
            </article>
        </section>
    );
}

export default AsideBar;
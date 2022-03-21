import './ProductGama.scss';
import fullStarIcon from '../../images/Full.svg';
import halfStarIcon from '../../images/Mid.svg';
import emptyStarIcon from '../../images/None.svg';


function ProductGama() {
    return (
        <div className='product-gama'>
            <img src={fullStarIcon} alt='icono de gama'></img>
            <img src={fullStarIcon} alt='icono de gama'></img>
            <img src={fullStarIcon} alt='icono de gama'></img>
            <img src={halfStarIcon} alt='icono de gama'></img>
            <img src={emptyStarIcon} alt='icono de gama'></img>
        </div>
    );
}

export default ProductGama;
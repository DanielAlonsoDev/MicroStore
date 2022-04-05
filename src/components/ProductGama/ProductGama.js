import './ProductGama.scss';
import StarIndicator from './StarIndicator';

function ProductGama(props) {

    return (
        <div className='stars-container'>
            <input type='checkbox' />
            <StarIndicator initialCount={2} />
            <StarIndicator initialCount={2} />
            <StarIndicator initialCount={1} />
            <StarIndicator initialCount={0} />
            <StarIndicator initialCount={0} />
        </div>
    );
}

export default ProductGama;
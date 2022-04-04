import './ProductGama.scss';
import { useEffect, useState } from 'react';
import StarIndicator from './StarIndicator';

function ProductGama(props) {
    const [value1, setValue1] = useState(2);
    const [value2, setValue2] = useState(2);
    const [value3, setValue3] = useState(1);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);
    const [exam, setExam] = useState(0);

    function accion() {
        setExam( exam + 1);
        setValue2(0);
    }

    return (
        <div className='stars-container'>
            <input type='checkbox' />
            <StarIndicator initialCount={value1} />
            <StarIndicator initialCount={value2} />
            <StarIndicator initialCount={value3} />
            <StarIndicator initialCount={value4} />
            <StarIndicator initialCount={value5} />
        </div>
    );
}

export default ProductGama;
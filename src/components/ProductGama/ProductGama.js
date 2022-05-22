import { useState } from 'react';
import './ProductGama.scss';
import StarIndicator from './StarIndicator';

const valuesArray = [
    { min: 0, mid: 0.5, max: 1 },
    { min: 1, mid: 1.5, max: 2 },
    { min: 2, mid: 2.5, max: 3 },
    { min: 3, mid: 3.5, max: 4 },
    { min: 4, mid: 4.5, max: 5 }
]

const ProductGama = (props) => {
    const { interactive, initValue } = props;
    const [pointsValue, setPointsValues] = useState(initValue);

    const updatePointsValue = (newValue) => {
        setPointsValues(newValue);
    }

    return (
        <div className='stars-container'>

            {
                interactive ? (
                    //Estrellas con evento
                    valuesArray.map(item => {
                        return <StarIndicator key={item.max} range={item} value={pointsValue} action={updatePointsValue} enableEvent={interactive} />
                    })

                ) : (
                    //Estrellas sin evento
                    valuesArray.map(item => {
                        return <StarIndicator key={item.max} range={item} value={pointsValue} enableEvent={interactive} />
                    })
                )
            }
            <span className='stars-counter'>{pointsValue}</span>
        </div>
    );
}

export default ProductGama;
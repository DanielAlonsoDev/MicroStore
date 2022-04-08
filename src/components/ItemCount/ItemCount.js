import { useEffect } from "react";
import './ItemCount.scss';

function ItemCount(props) {
    const { count, actionIncrease, actionDecrease } = props;

    useEffect(() => {
        const selectedInput = document.querySelector('.itemCounter .stockCountInput');
        selectedInput.value = count;
    }, [count]);

    return (
        <div className="itemCounter">
            <button onClick={actionDecrease}>-</button>
            <input className='stockCountInput' type='text' />
            <button onClick={actionIncrease}>+</button>
        </div>
    );
}

export default ItemCount;
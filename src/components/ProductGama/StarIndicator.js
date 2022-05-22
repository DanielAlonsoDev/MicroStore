import FullStar from '../../Utils/images/full.svg';
import EmptyStar from '../../Utils/images/empty.svg';
import HalfStar from '../../Utils/images/mid.svg';
import { useEffect, useState } from 'react';

const StarIndicator = (props) => {
    const [activeIcon, setStarIcon] = useState('');
    const [count, setCount] = useState(0);
    const { min, mid, max } = props.range;
    const productGama = props.value;
    const updateGama = props.action;
    const { enableEvent } = props;

    //Array con los iconos de las estrellas 
    const starIcons = [EmptyStar, HalfStar, FullStar];

    //Alternamos el valor de la key de posicion de las estrellas
    const changeIcon = () => {
        switch (count) {
            case 0:
                setCount(1);
                updateGama(mid);
                break;
            case 1:
                setCount(2);
                updateGama(max);
                break;
            default:
                setCount(0);
                updateGama(min);
                break;
        }
    }

    useEffect(() => {
        setStarIcon(starIcons[count]);
    }, [count]);

    useEffect(() => {
        if (productGama <= min) {
            setCount(0);
        }

        if (productGama >= mid) {
            setCount(1);
        }

        if (productGama >= max) {
            setCount(2);
        }
    }, [productGama, min, mid, max]);

    return (
        <>
            {enableEvent ? (
                <button onClick={changeIcon}><img src={activeIcon} alt='Icono_de_estrella' /></button>
            ) : (
                <button><img src={activeIcon} alt='Icono_de_estrella' /></button>
            )}
        </>
    );
}

export default StarIndicator;
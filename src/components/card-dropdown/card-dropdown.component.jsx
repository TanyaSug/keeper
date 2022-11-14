import { useContext } from 'react';
import { CardContext } from '../../contexts/card.context';

import './card-dropdown.style.scss';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.component';


const CardDropdown = () => {
    const { cardItems } = useContext(CardContext);
    return (
        <div className='card-dropdown-container'>
            <div className='card-items' >
            {cardItems.map((item) => (
                <CardItem ke={item.id} cardItem={item} />
            ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CardDropdown;
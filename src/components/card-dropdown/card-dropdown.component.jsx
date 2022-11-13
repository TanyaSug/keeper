import './card-dropdown.style.scss';
import Button from '../button/button.component';


const CardDropdown = () => {
    return (
        <div className='card-dropdown-container'>
            <div className='card-items' />
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CardDropdown;
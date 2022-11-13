import {Link, Outlet} from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../../context/user.context';
import { CardContext } from '../../../context/card.context';

import  CardIcon  from '../../../components/card-icon/card-icon.component';
import CardDropdown from '../../card-dropdown/card-dropdown.component';

import {signOutUser} from '../../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCardOpen } = useContext(CardContext);

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>LOGO</div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CardIcon />
                </div>
                {isCardOpen && <CardDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
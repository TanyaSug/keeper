import {Link, Outlet} from "react-router-dom";
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>LOGO</div>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
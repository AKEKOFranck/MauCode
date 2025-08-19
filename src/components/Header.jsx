import '../styles/Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
    return(
        <nav>
                <Link to='/' className='nav_link_home'>MauCode</Link>
                <Link to='/Course' className='nav_link'>Nos Cours</Link>
                <Link to='/About' className='nav_link'>À propos</Link>
                <Link to='' className='nav_link'>Infos</Link>
        </nav>
    )
}
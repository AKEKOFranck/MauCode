import '../styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
       <div className='home_main'>
         <Link to='/Course'>
            <button type='button' className='home_bt'>
                Débutez en programmation 
                <p> maintenant ! </p>
            </button>
        </Link>

         <Link to='/About'>
            <button type='button' className='home_bt2'>
                Mais Pourquoi Apprendre à
                <p>  Coder Aujourd’hui ? </p>
            </button>
        </Link>
       </div>
    )
}
import '../styles/Course.css';
import logo1 from '../assets/pythonLogo.png';
import logo2 from '../assets/webLogo.png';
import logo3 from '../assets/jsLogo.png';
import { Link } from 'react-router-dom';


export default function Course() {

    const lesson = [
        {id:1,
        image: logo1,
        text: <Link to='' className='course_text'>
            python pour débutant
        </Link>,
        },
        {id:2,
        image: logo2,
        text: <Link to='' className='course_text'>
            intro au dev web
        </Link>
        },
        {id:3,
        image: logo3,
        text: <Link to='' className='course_text'>
            JavaScript pour débutant
        </Link>,
        },

    ];


    return(
        <section className='course_main'>
            <h1 className='course_title'>
                Decouvrez nos cours pour débutant
            </h1>

            <div className='course_cont'>

                {lesson.map((less) =>(
                        <div className='course_box' key={less.id}>
                       <img className='course_img' src={less.image} alt='logo'></img>
                       <h4 className='course_text'>
                          {less.text}
                       </h4>
                   </div>
                ))}

            </div>
        </section>
    )
}
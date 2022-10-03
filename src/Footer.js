import './Footer.css'

import insta from './insta.svg'
import github from './github.svg'

function Footer() {
    return (
        <footer>
            <img 
                src={insta}
                href="#"
                className="media-icon" 
                alt="insta-icon"></img>
            <img 
                src={github}
                href="#"
                className="media-icon" 
                alt="git-icon"></img>
        </footer>
    )
}

export default Footer;

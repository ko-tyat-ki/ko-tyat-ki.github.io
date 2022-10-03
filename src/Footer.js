import './Footer.css'

import insta from './insta.svg'
import github from './github.svg'

function Footer() {
    return (
        <footer>
            <div className="AroundFooter">
                <img 
                    src={insta}
                    href="https://www.instagram.com/kotyatki.kollektiv"
                    className="media-icon" 
                    alt="insta-icon"></img>
                <img 
                    src={github}
                    href="https://github.com/ko-tyat-ki"
                    className="media-icon" 
                    alt="git-icon"></img>
            </div>
        </footer>
    )
}

export default Footer;

import './Footer.css'

import insta from './insta.svg'
import github from './github.svg'

function Footer() {
    return (
        <footer>
            <div className="AroundFooter">
                <a href="https://www.instagram.com/kotyatkikollektiv">
                    <img 
                        src={insta}
                        className="media-icon" 
                        alt="insta-icon"/>
                </a>
                <a href="https://github.com/ko-tyat-ki">
                    <img 
                        src={github}
                        href="https://github.com/ko-tyat-ki"
                        className="media-icon" 
                        alt="git-icon"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;

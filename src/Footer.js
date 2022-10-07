import './Footer.css'

import insta from './insta.svg'
import github from './github.svg'
import tele from './tele.svg'

import './Footer.css';

function Footer() {
    return (
        <footer>
            <div class="ko-footer">
                <div className="media">
                    <p>connect with us:</p>
                    <div className="media-links">
                        <a href="https://www.instagram.com/kotyatkikollektiv">
                            <img 
                                src={insta}
                                className="media-icon" 
                                alt="insta-icon"/>
                        </a>
                        <a href="https://github.com/ko-tyat-ki">
                            <img 
                                src={github}
                                className="media-icon" 
                                alt="git-icon"/>
                        </a>
                        <a href="https://t.me/katya_loschinina">
                            <img 
                                src={tele}
                                className="media-icon" 
                                alt="git-icon"/>
                        </a>
                    </div>
                </div>
                <p className="email">katerina.loschinina@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer;

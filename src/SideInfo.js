import {useState} from 'react';

import kitty from './kitty-icon.svg'
import close from './close.svg'

import './SideInfo.css';

function SideInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(current => !current);
  };

  const team = [
    "Katerina Loschinina",
    "Andrey Novikov",
    "Lucy Onischenko",
    "Alex Ostrovsky",
    "Paulo Ricca",
    "Inessa Demidova",
    "Ilya Tikhonov",
    "Santiago Carbon",
    "Katya Marchenko",
    "Andrey Lapov",
    "Ivan Isakov",
    "Ilya Batii",
    "Nik Nightingale",
    "Oleg Gergel",
    "PARANORMA",
    "MoonCows",
    "Milo Bird"
  ]

  return (
    <div className={isOpen ? "side-info open" : "side-info"}>
      {isOpen ? <img 
        src={close}
        className="info-icon" 
        alt="close-icon"
        onClick={handleOpen}></img> :
        <img 
        src={kitty}
        className="info-icon" 
        alt="kitty-icon"
        onClick={handleOpen}></img>}
      
      {isOpen && 
        <section className="text">
          <h3>who are we?</h3>
          <p>we are a London-based techno-art collective exploring perception, inception &#38; conception. We've successfully built art installations at regional Burning Man events</p>
          <h3>Team</h3>
          <ul>
            {team.sort((a,b) => a.localeCompare(b)).map((name) => (<li>{name}</li>))}
          </ul>
        </section>
      }
    </div>
  );
}

export default SideInfo;

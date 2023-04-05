import './Header.css';

function Header() {
  return (
    <header>
      <div className="ko-header">
        <h1>Ko-Tyat-Ki Kollektiv.</h1>
        <menu>
          <li><a href="#kinkiyokai" target="_blank">kinki yokai</a></li>
          <li><a href="#contacts">contacts</a></li>
          <li><a href="#team">team</a></li>
          <li><a href="#about">about us</a></li>
        </menu>
      </div>    
    </header>
  );
}

export default Header;

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';
import instagramLogo from '../assets/instagram-logo.svg';

import '../styles/home.scss';

export function Home() {
  return (
    <div id="page-home">
      <img src={logo} alt="Logo Oceaning" />
      <h1>Time de desenvolvimento</h1>
      <h2>Sua evolução começa agora</h2>
      <p>
        Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com
        suas habilidades de programação.
      </p>

      <button>
        Começar agora <img src={arrow} alt="arrow" />
      </button>

      <div className="share">
        <img src={instagramLogo} alt="Logo Instagram" />
        <div>
          <span>compartilhe</span>
          <a href="#">@theoceaning</a>
        </div>
      </div>
    </div>
  );
}
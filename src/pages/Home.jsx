import { useHistory } from 'react-router-dom';

import logo from '../assets/logo.png';
import instagramLogo from '../assets/instagram-logo.svg';
import arrow from '../assets/arrow-black.svg';

import '../styles/home.scss';
import { Button } from '../components/Button';

export function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  return (
    <div id="page-home">
      <img src={logo} alt="Logo Oceaning" />

      <main>
        <h1>Time de desenvolvimento</h1>
        <h3>Sua evolução começa agora</h3>
        <p>
          Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com
          suas habilidades de programação.
        </p>

        <Button onClick={handleClick}>
          Começar agora <img src={arrow} alt="arrow" />
        </Button>
      </main>

      <footer>
        <img src={instagramLogo} alt="Logo Instagram" />
        <div>
          <span>compartilhe</span>
          <a
            href="https://instagram.com/theoceaning"
            target="_blank"
          >@theoceaning</a>
        </div>
      </footer>
    </div>
  );
}
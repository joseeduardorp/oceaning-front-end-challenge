import { useHistory } from 'react-router-dom';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';

import { Button } from '../components/Button/index';
import { Share } from '../components/Share/index';

import '../styles/pages/home.scss';

export function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  return (
    <div id="page-home">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main>
        <h1>Time de desenvolvimento</h1>
        <h2>Sua evolução começa agora</h2>
        <p>
          Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com
          suas habilidades de programação.
        </p>

        <Button onClick={handleClick}>
          Começar agora <img src={arrow} alt="arrow" />
        </Button>
      </main>

      <footer>
        <Share />
      </footer>
    </div>
  );
}
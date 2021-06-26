import logo from '../assets/logo.png';
import arrow from '../assets/arrow-white.svg';

import { Share } from '../components/Share/index';

import '../styles/home.scss';
import '../styles/success.scss';

export function Success() {
  return (
    <div id="page-home" className="success">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main>
        <h1 className="success">Parabéns</h1>
        <h2 className="success">Suas habilidades foram enviadas</h2>
        <p>
          Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com
          suas habilidades de programação.
        </p>

        <button className="all">
          ver todos <img src={arrow} alt="arrow" />
        </button>
      </main>

      <footer>
        <Share />
      </footer>
    </div>
  );
}
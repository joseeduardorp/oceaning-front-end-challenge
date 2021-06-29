import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { candidatos } from '../candidates';

import { Share } from '../components/Share/index';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-white.svg';

import '../styles/pages/success.scss';

export function Success() {
  const history = useHistory();

  function handleClick(event) {
    event.preventDefault();

    history.push('/list');
  }

  useEffect(() => {
    const candidato = JSON.parse(sessionStorage.getItem('candidato'));

    candidatos.unshift(candidato);
  }, [])

  return (
    <div id="page-success">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main>
        <div>
          <h1 className="success">Parabéns</h1>
          <h2 className="success">Suas habilidades foram enviadas</h2>
          <p>
            Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com
            suas habilidades de programação.
          </p>
        </div>

        <button onClick={event => handleClick(event)}>
          ver todos <img src={arrow} alt="arrow" />
        </button>
      </main>

      <footer>
        <Share />
      </footer>
    </div>
  );
}
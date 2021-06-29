import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../components/Button/index';
import { Share } from '../components/Share/index';

// import { candidatos } from '../candidates';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';

import '../styles/pages/register.scss';

const candidateTemplate = {
  name: '',
  email: '',
  publishedAt: '29/06/2021',
  skills: [],
}

export function Register() {
  const [erro, setErro] = useState(false);
  const [candidate, setCandidate] = useState(candidateTemplate);
  const history = useHistory();

  function handleInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    const newCandidate = {
      [field]: value
    };

    setCandidate(({...candidate, ...newCandidate}));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (candidate.name.trim() === '' || candidate.email.trim() === '') {
      setErro(true);
      return;
    }

    sessionStorage.setItem('candidato', JSON.stringify(candidate));
    
    history.push('/skills');
  }

  return (
    <div id="page-register">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main className="register">
        <div>
          <h3>Vamos começar</h3>
          <h4>Como devemos te chamar?</h4>
          <p>
            Nos diga como devemos te chamar e qual é o seu e-mail para que
            possamos te enviar novidades.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                className={erro ? "erro" : ""}
                onFocus={() => setErro(false)}
                onChange={event => handleInputChange(event)}
                value={candidate.name}
              />
            </label>
            
            <label htmlFor="email">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Digite seu email"
                className={erro ? "erro" : ""}
                onFocus={() => setErro(false)}
                onChange={event => handleInputChange(event)}
                value={candidate.email}
              />
            </label>

            {erro && (<p>Preencha estes campos</p>)}
          </div>

          <Button type="submit">
            Continuar <img src={arrow} alt="arrow" />
          </Button>
        </form>
      </main>

      <footer>
        <Share />
      </footer>
    </div>
  );
}
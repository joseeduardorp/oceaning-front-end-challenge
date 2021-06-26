import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../components/Button/index';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';

import '../styles/home.scss';
import '../styles/register.scss';

export function Register() {
  const [erro, setErro] = useState(false);
  const [name, setName] = useState('');
  const history = useHistory();

  function handleSubmitName(event) {
    event.preventDefault();

    if (name.trim() === '') {
      setErro(true);
      return;
    }

    history.push('/skills');
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div id="page-home">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main style={{ textAlign: "left"}}>
        <h3>Vamos começar</h3>
        <h4>Como devemos te chamar?</h4>
        <p>
          Nos diga como devemos te chamar e qual é o seu e-mail para que
          possamos te enviar novidades.
        </p>
        
        <form onSubmit={handleSubmitName}>
          <input
            type="text"
            placeholder="Digite seu nome"
            className={erro ? "erro" : ""}
            onFocus={() => setErro(false)}
            onChange={handleChange}
            value={name}
          />

          {erro && (<p>Preencha este campo</p>)}

          <Button type="submit">
            Continuar <img src={arrow} alt="arrow" />
          </Button>
        </form>
      </main>
    </div>
  );
}
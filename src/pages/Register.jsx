import { useState } from 'react';

import { Button } from '../components/Button';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';
import '../styles/home.scss';

export function Register() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div id="page-home">
      <img src={logo} alt="Logo Oceaning" />

      <main style={{ textAlign: "left"}}>
        <h2>Vamos começar</h2>
        <h3>Como devemos te chamar?</h3>
        <p>
          Nos diga como devemos te chamar e qual é o seu e-mail para que
          possamos te enviar novidades.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={event => setName(event.target.value)}
            value={name}
          />
          <Button type="submit">
            Continuar <img src={arrow} alt="arrow" />
          </Button>
        </form>
      </main>
    </div>
  );
}
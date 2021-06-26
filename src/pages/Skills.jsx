import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import skills from '../data';

import { Button } from '../components/Button/index';
import { Skill } from '../components/Skill/index';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';
import check from '../assets/check.svg';

import '../styles/home.scss';
import '../styles/skills.scss';

export function Skills() {
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const history = useHistory();

  function handleSubmitSkills(event) {
    event.preventDefault();

    history.push('/success');
  }

  function handleChange(event) {
    const value = event.target.value;
    setSkill(value);

    const filtered = skills.filter((skill) => {
      return skill.charAt(0).toLocaleLowerCase() === value.charAt(0).toLocaleLowerCase();
    });
    setFilteredSkills(filtered);
  }

  return (
    <div id="page-home">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main style={{ textAlign: "left"}}>
        <h3>Olá, fulano</h3>
        <h4>Quais são suas habilidades?</h4>
        <p>
          Nos diga algumas de suas habilidades técnicas para que possamos avaliá-lo.
        </p>

        <form onSubmit={handleSubmitSkills}>
          <input
            type="text"
            placeholder="Digite uma habilidade"
            onChange={handleChange}
            value={skill}
          />

          <div className="skills-container">
            {filteredSkills.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  type="button"
                  onClick={() => console.log(skill)}
                >
                  {skill} <img src={check} alt="Checkmark" />
                </Skill>
              );
            })}
          </div>

          <Button type="submit">
            Finalizar <img src={arrow} alt="arrow" />
          </Button>
        </form>
      </main>

      <footer className="skills-modal">
        <span>Nenhuma habilidade selecionada</span>
      </footer>
    </div>
  );
}
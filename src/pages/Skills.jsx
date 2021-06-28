import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import skillsList from '../data';

import { Button } from '../components/Button/index';
import { Skill } from '../components/Skill/index';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';
import check from '../assets/check.svg';
import chevronsUp from '../assets/chevrons-up.svg';
import chevronsDown from '../assets/chevrons-down.svg';

import '../styles/home.scss';
import '../styles/skills.scss';

export function Skills() {
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillInputValue, setSkillInputValue] = useState('');
  const [erro, setErro] = useState(false);
  const history = useHistory();

  const [activeModal, setActiveModal] = useState(false);

  function handleSubmitSkills(event) {
    event.preventDefault();

    if (selectedSkills.length === 0) {
      setErro(true);
      return;
    }

    history.push('/success');
  }

  function handleChangeInput(event) {
    const value = event.target.value;
    setSkillInputValue(value);

    const filtered = skillsList.filter((skillItem) => {
      return skillItem.charAt(0).toLocaleLowerCase() === value.charAt(0).toLocaleLowerCase();
    });

    setFilteredSkills(filtered);
  }

  function handleSelectSkill(newSkill) {
    setSelectedSkills([...selectedSkills, newSkill]);
    setSkillInputValue('');
    setFilteredSkills([]);
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
            className={erro ? "erro" : ""}
            onChange={handleChangeInput}
            onFocus={() => setErro(false)}
            value={skillInputValue}
          />

          {erro && (<p>Insira, ao menos uma habilidade</p>)}

          <div className="skills-container">
            {filteredSkills.map((value, index) => {
              return (
                <Skill
                  key={index}
                  type="button"
                  onClick={() => handleSelectSkill(value)}
                >
                  {value} <img src={check} alt="Checkmark" />
                </Skill>
              );
            })}
          </div>

          <Button type="submit">
            Finalizar <img src={arrow} alt="arrow" />
          </Button>
        </form>
      </main>

      <footer
        className={cx(
          'skills-modal',
          { 'skills': selectedSkills.length > 0 },
          { 'modal-actived': activeModal }
        )}
        onClick={() => selectedSkills.length > 0 && setActiveModal(!activeModal)}
      >
        {selectedSkills.length > 0 ? (
          <span>
            {selectedSkills.length} Habilidade(s) adicionada(s)
            <strong>
              {activeModal ? "fechar" : "ver habilidades"}
              <img src={activeModal ? chevronsDown : chevronsUp} alt="Chevrons up"/>
            </strong>
          </span>
        ) : (
          <span>Nenhuma habilidade selecionada</span>
        )}
      </footer>
    </div>
  );
}
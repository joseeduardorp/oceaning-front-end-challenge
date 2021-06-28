import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import skillsList from '../data';

import { Button } from '../components/Button/index';
import { Skill } from '../components/Skill/index';
import { SkillsList } from '../components/SkillsList/index';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';
import check from '../assets/check.svg';

import '../styles/pages/home.scss';
import '../styles/pages/skills.scss';

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

  function handleActiveModal() {
    setActiveModal(!activeModal);
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

      <SkillsList
        list={selectedSkills}
        isActived={activeModal}
        onActiveModal={handleActiveModal}
      />
    </div>
  );
}
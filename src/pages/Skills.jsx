import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import skillsList from '../skills';

import { Button } from '../components/Button/index';
import { Skill } from '../components/Skill/index';
import { SkillsList } from '../components/SkillsList/index';
import { Share } from '../components/Share/index';

import logo from '../assets/logo.png';
import arrow from '../assets/arrow-black.svg';
import check from '../assets/check.svg';

import '../styles/pages/skills.scss';

export function Skills() {
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillInputValue, setSkillInputValue] = useState('');
  const [candidate, setCandidate] = useState({});
  const [erro, setErro] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedSkills.length === 0) {
      setErro(true);
      return;
    }

    candidate.skills = selectedSkills;
    sessionStorage.setItem('candidato', JSON.stringify(candidate));

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

  function handleRemoveSkill(index) {
    const removedSelectedSkills = selectedSkills.slice();
    removedSelectedSkills.splice(index, 1);

    setSelectedSkills(removedSelectedSkills);
    setActiveModal(false);
  }

  useEffect(() => {
    const candidato = JSON.parse(sessionStorage.getItem('candidato'));

    setCandidate(candidato);
    setSelectedSkills(candidato.skills);
  }, [])

  return (
    <div id="page-skills">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main className="register">
        <div>
          <h3>Olá, {candidate.name}</h3>
          <h4>Quais são suas habilidades?</h4>
          <p>
            Nos diga algumas de suas habilidades técnicas para que possamos avaliá-lo.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="skill">
            <input
              id="skill"
              type="text"
              placeholder="Digite uma habilidade"
              className={erro ? "erro" : ""}
              onChange={handleChangeInput}
              onFocus={() => setErro(false)}
              value={skillInputValue}
            />

            {erro && (<p>Insira, ao menos uma habilidade</p>)}
          </label>

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
        onRemoveSkill={handleRemoveSkill}
      />

      <footer>
        <Share />
      </footer>
    </div>
  );
}
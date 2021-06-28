import { CandidateList } from '../components/CandidateList';

import logo from '../assets/logo.png';

import '../styles/pages/home.scss';
import '../styles/pages/skills.scss';

const candidatos = [
  {
    name: "Willian Half",
    email: "willian.half@gmail.com",
    publishedAt: "17/08/2021",
    skills: [1, 2, 3, 4, 5]
  },
  {
    name: "Willian Half",
    email: "willian.half@gmail.com",
    publishedAt: "17/08/2021",
    skills: [1, 2, 3, 4, 5]
  },
  {
    name: "Willian Half",
    email: "willian.half@gmail.com",
    publishedAt: "17/08/2021",
    skills: [1, 2, 3, 4, 5]
  },
  {
    name: "Willian Half",
    email: "willian.half@gmail.com",
    publishedAt: "17/08/2021",
    skills: [1, 2, 3, 4, 5]
  },
  {
    name: "Willian Half",
    email: "willian.half@gmail.com",
    publishedAt: "17/08/2021",
    skills: [1, 2, 3, 4, 5]
  },
  {
    name: "Willian Half",
    email: "willian.half@gmail.com",
    publishedAt: "17/08/2021",
    skills: [1, 2, 3, 4, 5]
  },
  {
    name: "Willian Half",
    email: "willian.half@gmail.com",
    publishedAt: "17/08/2021",
    skills: [1, 2, 3, 4, 5]
  },
];

export function List() {
  return (
    <div id="page-home">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main>
        <h3>4 desenvolvedores encontrados</h3>
      </main>

      <CandidateList
        list={candidatos}
        isActived={true}
      />
    </div>
  );
}
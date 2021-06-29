import { CandidateList } from '../components/CandidateList';
import { Share } from '../components/Share';

import logo from '../assets/logo.png';

import '../styles/pages/list.scss';

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
    <div id="page-list">
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

      <footer>
        <Share />
      </footer>
    </div>
  );
}
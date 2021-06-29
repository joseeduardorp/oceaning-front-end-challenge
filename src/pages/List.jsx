import { CandidateList } from '../components/CandidateList';
import { Share } from '../components/Share';

import { candidatos } from '../candidates';

import logo from '../assets/logo.png';

import '../styles/pages/list.scss';

export function List() {
  return (
    <div id="page-list">
      <header>
        <img src={logo} alt="Logo Oceaning" />
      </header>

      <main>
        <h3>{candidatos.length} desenvolvedores encontrados</h3>
      </main>

      <CandidateList
        list={candidatos}
      />

      <footer>
        <Share />
      </footer>
    </div>
  );
}
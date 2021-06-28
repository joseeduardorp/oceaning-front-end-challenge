import { Button } from '../Button/index';

import arrow from '../../assets/arrow-black.svg';

import './styles.scss';

export function Modal({ list, isActived, activeModal }) {
  return (
    <div className={`candidatos-lista ${isActived ? "actived" : ""}`}>
      <ul>
        {list.map(({ name, email, publishedAt, skills}, index) => {
          return (
            <li key={index}>
              <strong>{name}</strong>
              <p>{email}</p>
              <span>Recebido em {publishedAt}</span>
              <div>
                <span>{skills.length} habilidades</span>
                <button>ver habilidades</button>
              </div>
            </li>
          );
        })}
      </ul>
      
      <div>
        <Button>
          Adicionar <img src={arrow} alt="arrow" />
        </Button>
      </div>
    </div>
  );
}
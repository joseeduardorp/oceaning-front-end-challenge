import cx from 'classnames';

import chevronsUp from '../../assets/chevrons-up.svg';
import chevronsDown from '../../assets/chevrons-down.svg';

import './styles.scss';

export function SkillsList({ list, isActived, onActiveModal }) {
  return (
    <div
      className={cx(
        'skill-list',
        { 'skill-selected': list.length > 0 },
        { 'actived': isActived }
      )}
    >
      <div
        className="heading"
        onClick={() => list.length > 0 && onActiveModal()}
      >
        {list.length > 0 ? (
          <span>
            {list.length} Habilidade(s) adicionada(s)
            <strong>
              {isActived ? "fechar" : "ver habilidades"}
              <img src={isActived ? chevronsDown : chevronsUp} alt="Chevrons up"/>
            </strong>
          </span>
        ) : (
          <span>Nenhuma habilidade selecionada</span>
        )}
      </div>

      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              <strong>{value}</strong>
              <button>remover</button>  
            </li>
          );
        })}
      </ul>
    </div>
  );
}
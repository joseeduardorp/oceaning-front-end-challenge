import instagramLogo from '../../assets/instagram-logo.svg';

import './styles.scss';

export function Share() {
  return (
    <div className="share-field">
      <img src={instagramLogo} alt="Logo Instagram" />
      <div>
        <span>compartilhe</span>
        <a
          href="https://instagram.com/theoceaning"
          target="_blank"
          rel="noreferrer"
        >@theoceaning</a>
      </div>
    </div>
  );
}
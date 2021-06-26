import instagramLogo from '../../assets/instagram-logo.svg';

import './styles.scss';

export function Share() {
  return (
    <>
      <img src={instagramLogo} alt="Logo Instagram" />
      <div>
        <span>compartilhe</span>
        <a
          href="https://instagram.com/theoceaning"
        >@theoceaning</a>
      </div>
    </>
  );
}
import React from 'react';

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.linkedin.com/in/marcelo-ezvo/'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-linkedin'></i>
      </a>

      <a
        href='https://github.com/MarceloGtz'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-github-alt'></i>
      </a>

      <a
        className='home__social-icon'
        target='_blank'
        href='../../../CV-MarceloGtz.pdf'
      >
        <i className='uil uil-file-download-alt'></i>
      </a>
    </div>
  );
};

export default Social;

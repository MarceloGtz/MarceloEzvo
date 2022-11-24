import React from 'react';

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bxl-html5 about__icon'></i>
        <i className='bx bxl-css3 about__icon'></i>

        <h3 className='about__title'>Html & Css</h3>
        <span className='about__subtitle'>1 Año Práctico</span>
      </div>

      <div className='about__box'>
        <i className='bx bxl-javascript about__icon'></i>
        <i className='bx bx-code-block about__icon'></i>

        <h3 className='about__title'>JavaScript</h3>
        <span className='about__subtitle'>1/2 Año Práctico</span>
      </div>

      <div className='about__box'>
        <i className='bx bxl-react about__icon'></i>
        <i className='bx bx-laptop about__icon'></i>

        <h3 className='about__title'>React Js</h3>
        <span className='about__subtitle'>1/2 Año Práctico</span>
      </div>

      <div className='about__box'>
        <i className='bx bxl-bootstrap about__icon'></i>
        <i className='bx bxs-edit-alt about__icon'></i>

        <h3 className='about__title'>Bootstrap 5</h3>
        <span className='about__subtitle'>Principiante</span>
      </div>

      <div className='about__box'>
        <i className='bx bxs-terminal about__icon'></i>
        <i className='bx bxl-github about__icon'></i>

        <h3 className='about__title'>Git & Github</h3>
        <span className='about__subtitle'>Principiante</span>
      </div>

      <div className='about__box'>
        <i className='bx bxs-medal about__icon'></i>

        <h3 className='about__title'>Inglés</h3>
        <span className='about__subtitle'>Nivel A2</span>
      </div>
    </div>
  );
};

export default Info;

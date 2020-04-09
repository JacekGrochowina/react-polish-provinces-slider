import React, { useRef, useEffect, useState } from 'react';
import { ReactComponent as Scene } from './assets/poland.svg';
import { Row, Col } from 'styled-bootstrap-grid';

// styles
import 'reset-css';
import './App.scss';

import data from './data';
import Info from './components/Info';

function App() {

  // state of slides (active = true/false)
  const [slides, setSlides] = useState([
    true,  // Zachodnio-Pomorskie
    false,  // Pomorskie
    false,  // Warmińsko-Mazurskie
    false,  // Podlaskie
    false,  // Lubuskie
    false,  // Wielkopolskie
    false,  // Kujawsko-Pomorskie
    false,  // Łódzkie
    false,   // Mazowieckie
    false,  // Lubelskie
    false,  // Dolnośląskie
    false,  // Opolskie
    false,  // Śląskie
    false,  // Świętokrzyskie
    false,  // Małopolskie
    false   // Podkarpackie
  ]);

  // return => (number)active slide
  const getActiveSlide = () => {
    let activeSlide = null;
    let found = false;
    let counter = 0;
    while (!found) {
      if (slides[counter]) found = true;
      if (found) activeSlide = counter;
      if (counter >= slides.length) {
        found = !found;
        activeSlide = null;
      } else {
        counter++;
      }
    }
    return activeSlide;
  }
  const [activeSlide, setActiveSlide] = useState(getActiveSlide());

  // ref to provinces svg
  const map = useRef(null);
  useEffect(() => {
    const [elements] = map.current.children;
    let provinces = [];
    const pushToArray = (value) => provinces.push(elements.getElementById(value));
    pushToArray('zachodnio-pomorskie');
    pushToArray('pomorskie');
    pushToArray('warminsko-mazurskie');
    pushToArray('podlaskie');
    pushToArray('lubuskie');
    pushToArray('wielkopolskie');
    pushToArray('kujawsko-pomorskie');
    pushToArray('lodzkie');
    pushToArray('mazowieckie');
    pushToArray('lubelskie');
    pushToArray('dolnoslaskie');
    pushToArray('opolskie');
    pushToArray('slaskie');
    pushToArray('swietokrzyskie');
    pushToArray('malopolskie');
    pushToArray('podkarpackie');

    provinces.forEach((item, number) => {
      // show active province on start app
      provinces[activeSlide].setAttribute('active', 'true')
      // show active province after click
      item.addEventListener('click', () => {
        for (let i = 0; i < slides.length; i++) slides[i] = false;

        setSlides([...slides], slides[number] = true)
        setActiveSlide(getActiveSlide())

        provinces.forEach((item, number) => {
          if (number === getActiveSlide()) {
            item.setAttribute('active', 'true')
          } else {
            item.setAttribute('active', 'false')
          }
        })
      })
    })
  }, [])

  // style of App
  const style = {
    height: '100vh',
    backgroundImage: `url(${data[activeSlide].bgImg})`
  }

  return (
    <div className="App" style={style}>

      <div className="page-wraper">
        <Row>
          <Col col={6} ref={map} style={{
            width: '100%'
          }}>
            <Scene />
          </Col>

          <Col col={6} style={{
            width: '100%'
          }}>
            <Info active={activeSlide} />
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default App;

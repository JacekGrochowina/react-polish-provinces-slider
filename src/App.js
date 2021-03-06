import React, { useRef, useEffect, useState } from 'react';
import { ReactComponent as Scene } from './assets/poland.svg';
import { Row, Col } from 'styled-bootstrap-grid';

// styles
import 'reset-css';
import './App.scss';

import data from './data';
import Info from './components/Info';
import ImageBg from './components/ImageBg';

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

  const map = useRef(null);   // ref to provinces svg
  useEffect(() => {

    // get elements (provinces) by id from map of country
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

    // interactive of country map
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

  return (
    <div className="App">

      <ImageBg src={data[activeSlide].bgImg} />

      <div className="page-wraper">
        <Row>
          <Col xl={6} md={12} sm={12} xs={12} ref={map} style={{
            width: '100%',
            padding: '10px'
          }}>
            <Scene />
          </Col>

          <Col xl={5} xlOffset={1} md={12} sm={12} xs={12} style={{
            width: '100%'
          }}>
            <Info activeId={activeSlide} />
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default App;

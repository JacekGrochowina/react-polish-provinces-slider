import React, { useRef, useEffect } from 'react';
import { ReactComponent as Scene } from './assets/poland.svg';
import { Row, Col } from 'styled-bootstrap-grid';

// styles
import 'reset-css';
import './App.scss';

import data from './data';
import Info from './components/Info';

function App() {

  const map = useRef(null);



  useEffect(() => {
    const [elements] = map.current.children;

    let provinces = [];

    const pushToArray = (value) => {
      provinces.push(elements.getElementById(value));
    }

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

    provinces.forEach((item, number) => item.addEventListener('click', () => {
      console.log(`id:            ${item.id}`)
      console.log(`key:           ${data[number].key}`);
      console.log(`województwo:   ${data[number].province}`);
      console.log(`stolica:       ${data[number].capital}`);
      console.log(`populacja:     ${data[number].population}`);
      console.log(`powierzchnia:  ${data[number].area}`);
      console.log(`tło:           ${data[number].bgImg}`);
      console.log(`------------------------------------`);
    }))
  })

  const style = {
    height: '100vh',
    backgroundColor: '#222',
  }

  return (
    <div className="App" style={style}>

      <Row>
        <Col col={6} ref={map}>
          <Scene />
        </Col>

        <Col col={6}>
          <Info />
        </Col>
      </Row>

    </div>
  );
}

export default App;

import React, { useRef, useEffect } from 'react';
import { ReactComponent as Scene } from './poland.svg';
import { Row, Col } from 'styled-bootstrap-grid';

// styles
import 'reset-css';
import './App.scss';

import data from './data';

function App() {

  const map = useRef(null);

  useEffect(() => {
    const [elements] = map.current.children;

    const zp = elements.getElementById('zachodnio-pomorskie');

    console.log(elements)
    console.log(zp)
  })

  const dataList = data.map(element => {
    console.log(`województwo:   ${element.province}`);
    console.log(`stolica:       ${element.capital}`);
    console.log(`populacja:     ${element.population}`);
    console.log(`powierzchnia:  ${element.area}`);
    console.log(`------------------------------------`);
  });

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
          {/* {dataList} */}
        </Col>
      </Row>

    </div>
  );
}

export default App;

import React from 'react';
import data from '../data';
import Property from './Property';
import Header from './Header';

import './Info.scss';

const Info = (props) => {
    return (
        <div className="info">
            <Header value={data[props.activeId].province} />

            <Property name="stolica" value={data[props.activeId].capital} />
            <Property name="populacja" value={data[props.activeId].population} />
            <Property name="powierzchnia" value={data[props.activeId].area} />
        </div>
    )
}

export default Info;
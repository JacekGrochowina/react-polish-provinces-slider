import React from 'react';

import './Property.scss';

const Property = (props) => {
    return (
        <div className="info__property property">
            <h2 className="property__title">{props.name}</h2>
            <h1 className="property__data">{props.value}</h1>
        </div>
    )
}

export default Property;
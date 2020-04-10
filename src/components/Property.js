import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import './Property.scss';

const Property = (props) => {

    const data = useRef(null);
    useEffect(() => {
        gsap.set([data.current], { duration: 1, autoAlpha: 0, y: 30 })
        gsap.to(data.current, { autoAlpha: 1, delay: 0.35, y: 0 })
    })

    return (
        <div className="info__property property">
            <h2 className="property__title">{props.name}</h2>
            <h1 className="property__data" ref={data}>{props.value}</h1>
        </div>
    )
}

export default Property;
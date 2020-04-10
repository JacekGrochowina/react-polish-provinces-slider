import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import './ImageBg.scss';

const ImageBg = (props) => {

    const image = useRef(null);

    useEffect(() => {
        gsap.set(image.current, { duration: 1, autoAlpha: 0, transform: 'scale(1.5)' })
        const tl = gsap.timeline({ defaults: { duration: 1 } })

        tl
            .to(image.current, { autoAlpha: 1 })
            .to(image.current, { transform: 'scale(1)' }, '-0.15')
    })

    return (
        <div className="backround">
            <img ref={image} className="backround__image" src={props.src} />
        </div>
    )
}

export default ImageBg;
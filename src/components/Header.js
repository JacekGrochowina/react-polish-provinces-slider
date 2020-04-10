import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import './Header.scss';

const Header = (props) => {

    const title = useRef(null);
    useEffect(() => {
        gsap.set([title.current, title.current.child], { duration: 1, autoAlpha: 0, x: -100 })
        gsap.to(title.current, { autoAlpha: 1, x: 0 })
    })

    return (
        <header className="info__header header" ref={title}>
            <h1 className="header__title">{props.value}</h1>
        </header>
    )
}

export default Header;
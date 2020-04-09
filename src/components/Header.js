import React from 'react';

import './Header.scss';

const Header = (props) => {
    return (
        <header className="info__header header">
            <h1 className="header__title">{props.value}</h1>
        </header>
    )
}

export default Header;
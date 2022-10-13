import { useLayoutEffect, useState } from 'react';

import NavBar from '../NavBar';
import SubMenu from '../SubMenu';

function Menu({ display }) {
    const [hoverNav, setHoverNav] = useState();
    const [outHover, setOutHover] = useState(false);
    const [displays, setDisplays] = useState(false);
    const handleHoverNavBar = (e) => {
        setOutHover(false);
        setHoverNav(e.target.innerHTML);
    };

    const handleOutHover = (e) => {
        setOutHover(true);
    };

    useLayoutEffect(() => {
        if ((outHover && display) || (!outHover && display)) {
            setDisplays(true);
        } else {
            setDisplays(false);
        }
    });
    return (
        <>
            <NavBar onMouseOver={handleHoverNavBar} onMouseOut={handleOutHover} />
            <SubMenu hover={hoverNav} outHoverNav={displays} />
        </>
    );
}

export default Menu;

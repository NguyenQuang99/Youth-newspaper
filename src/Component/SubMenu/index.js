import { useEffect, useState } from 'react';

import style from './SubMenu.module.scss';
import { NavBarMenu } from '../../mockData/Const';

function SubMenu({ hover, outHoverNav }) {
    const [children, setChildren] = useState([]);
    const [leftSub, setLeftSub] = useState('74px');

    useEffect(() => {
        hover && setChildren(NavBarMenu.filter((elm, index) => elm.title === hover)[0].subMenu);
        hover && setLeftSub(NavBarMenu.filter((elm, index) => elm.title === hover)[0].left);
    }, [hover]);

    return (
        <ul
            className={style.listSubMenu}
            style={leftSub && outHoverNav ? { left: leftSub, display: 'block' } : { left: leftSub, display: 'none' }}
        >
            {children &&
                children.map((title, index) => {
                    return (
                        <li className={style.subMenu} key={index}>
                            {title}
                        </li>
                    );
                })}
        </ul>
    );
}

export default SubMenu;

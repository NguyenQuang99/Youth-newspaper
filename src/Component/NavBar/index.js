import style from './NavBar.module.scss';
import { NavBarMenu } from '../../mockData/Const';

function NavBar({ onMouseOver, onMouseOut }) {
    return (
        <div className={style.backgroundNavBar}>
            <span className={style.goHome}>HomeP</span>
            {NavBarMenu.map((nar, index) => {
                return (
                    <li
                        className={style.listMenuNavBar}
                        key={index}
                        onMouseEnter={onMouseOver}
                        onMouseLeave={onMouseOut}
                    >
                        {nar.title}
                    </li>
                );
            })}
        </div>
    );
}

export default NavBar;

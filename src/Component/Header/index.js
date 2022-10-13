import style from './Header.module.scss';
import SearchBox from '../SearchBox';
import Contact from '../Contact';

function Header() {
    return (
        <div className={style.Header}>
            <div className={style.BoderHeader}>
                <img
                    className={style.Logo}
                    src="https://phimmoi88.net/public/logo-phimmoi88.png"
                    alt="Phim mới 88 | Xem Phim Mới Nhanh, Chất Lượng Full HD"
                ></img>
                <SearchBox />
                <Contact />
            </div>
        </div>
    );
}

export default Header;

import style from './FilmItem.module.scss';

import { Link } from 'react-router-dom';

function FilmItem({ imgFilm, title, count }) {
    return (
        <Link className={style.wrapper} to="/phim">
            <div className={style.imgBackGround}>
                <img src={imgFilm} className={style.img} alt="ảnh phim boruto" />
                <span className={style.countPractice}>{count}</span>
            </div>
            <div className={style.title}>{title}</div>
            <div className={style.description}>Boruto: Naruto Next Generations</div>
        </Link>
    );
}

export default FilmItem;

import { Link } from 'react-router-dom';

import style from './EvaluateItemFilm.module.scss';
import imgPoster from '../../mockData/images/anh-anime-nu.jpg';

function EvalucateItemFilm() {
    return (
        <div className={style.wrapper}>
            <img src={imgPoster} alt="anh chua load ra" className={style.poster} />
            <Link to="/phim/watch" className={style.playFilm}>
                <button className={style.button}>XEM PHIM</button>
            </Link>
        </div>
    );
}

export default EvalucateItemFilm;

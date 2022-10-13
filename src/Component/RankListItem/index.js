import style from './RankListItem.module.scss';

import { Link } from 'react-router-dom';

function RankListItem({ rankFilm }) {
    return (
        <div className={style.wrapper}>
            <Link className={style.rowItem} to="/phim">
                <img src={rankFilm.img} alt="" className={style.imgFilm} />
                <div className={style.columContent}>
                    <h3 className={style.title}>{rankFilm.name}</h3>
                    <h5 className={style.description}>Back to the society</h5>
                    <h5 className={style.viewer}>{rankFilm.count}</h5>
                </div>
            </Link>
        </div>
    );
}

export default RankListItem;

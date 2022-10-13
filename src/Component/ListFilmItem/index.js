import style from './ListFilmItem.module.scss';

import FilmItem from '../FilmItem';
function ListFilmItem({ listFilmsImg }) {
    return (
        <div className={style.wrapper}>
            <ul
                className={style.wrapperListItem}
                style={window.location.pathname === '/phim/watch' ? { paddingLeft: '40px' } : { paddingLeft: '0px' }}
            >
                {listFilmsImg.map((film, index) => {
                    return <FilmItem key={index} imgFilm={film.image} title={film.title} count={film.practice} />;
                })}
            </ul>
        </div>
    );
}

export default ListFilmItem;

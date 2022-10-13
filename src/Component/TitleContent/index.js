import style from './TitleContent.module.scss';

function TitleContent({ titleFilm }) {
    return (
        <div className={style.wrapper}>
            <h2
                className={style.title}
                style={
                    window.location.pathname === '/phim' || window.location.pathname === '/phim/watch'
                        ? { paddingLeft: '35px' }
                        : { paddingLeft: '10px' }
                }
            >
                {titleFilm}
            </h2>
            <span className={style.overView}>Xem tất cả</span>
        </div>
    );
}

export default TitleContent;

import style from './ProfileFilmItem.module.scss';

import QualityFilm from '../QualityFilm';

function ProfileFilmItem() {
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Boruto: Naruto Thế Hệ Tiếp Theo</h2>
            <h3 className={style.description}>Boruto: Naruto Next Generations</h3>
            <div className={style.wrapperContent}>
                <span className={style.titleContent}>Thời lượng:</span>
                <span className={style.timer}>200 tập</span>
            </div>
            <div className={style.wrapperContent}>
                <span className={style.titleContent}>Đạo diễn:</span>
                <span className={style.content}>Hiroyuki Yamashita</span>
            </div>
            <div className={style.wrapperContent}>
                <span className={style.titleContent}>Diễn viên:</span>
                <span className={style.content}>Narumi Yasuda</span>
            </div>
            <div className={style.wrapperContent}>
                <span className={style.titleContent}>Thể loại:</span>
                <span className={style.content}>Phim hoạt hình</span>
            </div>
            <div className={style.wrapperContent}>
                <span className={style.titleContent}>Lượt xem:</span>
                <span className={style.content}>315060</span>
            </div>
            <QualityFilm />
        </div>
    );
}

export default ProfileFilmItem;

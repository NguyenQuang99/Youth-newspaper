import style from './WatchMovie.module.scss';

import imgBanner from '../../mockData/Const';
import Category from '../../Component/Category';
import LoadVideos from '../../Component/LoadVideos';
import QualityFilm from '../../Component/QualityFilm';
import TitleContent from '../../Component/TitleContent';
import Episode from '../../Component/Episode';
import Comment from '../../Component/Comment';
import ListFilmItem from '../../Component/ListFilmItem';
import { listFilmsImg } from '../../mockData/Const';

function WatchMovie() {
    return (
        <div className={style.home}>
            <div className={style.banner}>
                <img src={imgBanner} className={style.bannerImg} alt="ảnh chưa load ra" />
            </div>
            <div className={style.columBackGround}>
                <div className={style.backGroundLeft}>
                    <Category />
                    <LoadVideos />
                    <div className={style.nameFilmQuality}>
                        <div className={style.leftQuatity}>
                            <h2 className={style.name}>Độc Cô Thiên Hạ</h2>
                            <h2 className={style.subName}>The Legend of Dugu</h2>
                        </div>
                        <QualityFilm width={'240px'} />
                    </div>
                    <Episode />
                    <Comment width={'99.9%'} marginLeft={'40px'} marginTop={'1px'} />
                    <TitleContent titleFilm={' Có Thể Bạn Muốn Xem'} />
                    <ListFilmItem listFilmsImg={listFilmsImg} />
                </div>
            </div>
        </div>
    );
}

export default WatchMovie;

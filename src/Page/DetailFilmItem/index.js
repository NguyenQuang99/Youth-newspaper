import style from './DetailFilmItem.module.scss';

import imgBanner from '../../mockData/Const';
import MenuRightNav from '../../Component/MenuRightNav';
import GroupListRankFilmItem from '../../Component/GroupListRankFilmItem';
import Category from '../../Component/Category';
import EvalucateItemFilm from '../../Component/EvaluateItemFilm';
import ProfileFilmItem from '../../Component/ProfileFilmItem';
import TitleContent from '../../Component/TitleContent';
import MovieIntruduction from '../../Component/MovieIntruduction';
import ListFilmItem from '../../Component/ListFilmItem';
import Comment from '../../Component/Comment';
import { listFilmsImg } from '../../mockData/Const';

function DetailFilmItem() {
    return (
        <div className={style.home}>
            <div className={style.banner}>
                <img src={imgBanner} className={style.bannerImg} alt="ảnh chưa load ra" />
            </div>
            <div className={style.columBackGround}>
                <div className={style.backGroundLeft}>
                    <Category />
                    <EvalucateItemFilm />
                    <ProfileFilmItem />
                    <TitleContent titleFilm={'NỘI DUNG PHIM'} />
                    <MovieIntruduction />
                    <TitleContent titleFilm={' Review phim Tái Chiến Giang Hồ'} />
                    <Comment width={'90%'} marginLeft={'35px'} marginTop={'15px'} />
                    <TitleContent titleFilm={' Phim Liên Quan'} />
                    <div className={style.filmL}>
                        <ListFilmItem listFilmsImg={listFilmsImg} />
                    </div>
                </div>
                <div className={style.backGroundRight}>
                    <MenuRightNav />
                    <GroupListRankFilmItem />
                </div>
            </div>
        </div>
    );
}

export default DetailFilmItem;

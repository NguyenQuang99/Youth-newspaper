import style from './Home.module.scss';

import imgBanner from '../../mockData/Const';
import HomeImage from '../../Component/HomeImage';
import TitleContent from '../../Component/TitleContent';
import MenuRightNav from '../../Component/MenuRightNav';
import ListFilmItem from '../../Component/ListFilmItem';
import { listFilmsImg, listFilmsImgOdd, cartoons } from '../../mockData/Const';
import GroupListRankFilmItem from '../../Component/GroupListRankFilmItem';

function HomePage() {
    return (
        <div className={style.home}>
            <div className={style.banner}>
                <img src={imgBanner} className={style.bannerImg} alt="ảnh chưa load ra" />
            </div>
            <div className={style.columBackGround}>
                <div className={style.backGroundLeft}>
                    <HomeImage />
                    <TitleContent titleFilm={'Phim Bộ'} />
                    <ListFilmItem listFilmsImg={listFilmsImg} />
                    <TitleContent titleFilm={'Phim Lẻ'} />
                    <ListFilmItem listFilmsImg={listFilmsImgOdd} />
                    <TitleContent titleFilm={'Hoạt Hình'} />
                    <ListFilmItem listFilmsImg={cartoons} />
                </div>
                <div className={style.backGroundRight}>
                    <MenuRightNav />
                    <GroupListRankFilmItem />
                </div>
            </div>
        </div>
    );
}

export default HomePage;

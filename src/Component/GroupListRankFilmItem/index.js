import RankListItem from '../RankListItem';
import style from './GroupListRankFilmItem.module.scss';
import img1 from '../../mockData/images/anh-anime-nu-dep-nhat-hinh-2.png';
import img2 from '../../mockData/images/anh-anime-nu.jpg';
import img3 from '../../mockData/images/hinh-anh-Anime-nu-dep-6-edited.jpg';
import img4 from '../../mockData/images/Top-50-Hinh-anh-Anime-Nu-dep-De-thuong-Chat.jpg';
import img5 from '../../mockData/images/nhung-hinh-anh-anime-nu-dep-nhat.jpg';

function GroupListRankFilmItem() {
    const array = [
        { name: 'Nozomo Otonashi', img: img1, count: '2000 lượt xem' },
        {
            name: 'Shenju Tensen',
            img: img2,
            count: '27520 lượt xem',
        },
        { name: 'Naofumi zendef', img: img3, count: '15203 lượt xem' },
        { name: 'Syffty Shen Ten', img: img4, count: '12501 lượt xem' },
        { name: 'Cute Anime Coppy', img: img5, count: '15610 lượt xem' },
    ];
    return (
        <div className={style.wrapperList}>
            {array.map((rankFilm, index) => {
                return <RankListItem key={index} rankFilm={rankFilm} />;
            })}
        </div>
    );
}

export default GroupListRankFilmItem;

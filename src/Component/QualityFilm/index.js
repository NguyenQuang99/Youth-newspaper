import style from './QualityFilm.module.scss';

function QualityFilm({ width }) {
    return (
        <div className={style.wrapper} style={width ? { width: width } : { width: '100%' }}>
            <div className={style.boderStars}>
                <span className={style.countStars}>8</span>
            </div>
            <ul className={style.starts}>
                <li className={style.start}></li>
                <li className={style.start}></li>
                <li className={style.start}></li>
                <li className={style.start}></li>
                <li className={style.start}></li>
                <li className={style.start}></li>
                <li className={style.start}></li>
                <li className={style.start}></li>
                <li className={style.start}></li>
                <li className={style.start}></li>
            </ul>
            <span className={style.evaluate}>3 lượt đánh giá</span>
        </div>
    );
}

export default QualityFilm;

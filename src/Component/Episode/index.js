import style from './Episode.module.scss';

function Episode() {
    const listPractiveFilm = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.episode}>
                <h2 className={style.subtitle}>THUYẾT MINH</h2>
                <ul className={style.listPractice}>
                    {listPractiveFilm.map((elm, index) => {
                        return (
                            <li key={index} className={style.practiveItem}>
                                {elm}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Episode;

import style from './Category.module.scss';
import { Link } from 'react-router-dom';

function Category() {
    let arayFimlCategory = ['Trang chủ'];

    arayFimlCategory =
        window.location.pathname === '/lien-he'
            ? [...arayFimlCategory, 'Liên hệ']
            : window.location.pathname === '/phim/watch'
            ? [...arayFimlCategory, 'Phim', 'Watch']
            : [...arayFimlCategory, 'Phim'];

    let to = '/';
    return (
        <div className={style.wrapper}>
            <ul className={style.selectCategory}>
                {arayFimlCategory.map((elm, index) => {
                    switch (elm) {
                        case 'Liên hệ':
                            to = '/lien-he';
                            break;
                        case 'Phim':
                            to = '/phim';
                            break;
                        case 'Watch':
                            to = '/phim/watch';
                            break;
                        default:
                            to = '/';
                            break;
                    }
                    return (
                        <Link key={index} className={style.itemCategory} to={to}>
                            {elm}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default Category;

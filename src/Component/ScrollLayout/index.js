import style from './ScrollLayout.module.scss';

import goTop from '../../mockData/images/btn-gotop.png';

function ScrollLayout({ onClick }) {
    return (
        <div className={style.wrapper} onClick={onClick}>
            <img src={goTop} alt="Về đầu trang" className={style.imgButton} />
        </div>
    );
}

export default ScrollLayout;

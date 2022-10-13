import style from './MenuRightNav.module.scss';
import TypeRank from '../TypeRank';

function MenuRightNav() {
    const MenuCheck = ['Phim Bộ', 'Phim Lẻ', 'Hoạt Hình'];
    return (
        <div className={style.parentMenuNav}>
            <div className={style.title}>BẢNG XẾP HẠNG</div>
            {MenuCheck.map((menu, index) => {
                return <TypeRank key={index} title={menu} />;
            })}
        </div>
    );
}

export default MenuRightNav;

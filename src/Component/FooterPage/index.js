import style from './FooterPage.module.scss';
import facebook from '../../mockData/images/facebook.png';
import instagram from '../../mockData/images/instagram.png';
import linkedin from '../../mockData/images/linkedin.png';
import twitter from '../../mockData/images/twitter.png';
import youtube from '../../mockData/images/youtube.png';
import logo from '../../mockData/images/logo-phimmoi88.png';

function FooterPage({ topFooter }) {
    const listType = [
        'Chính sách riêng tư',
        'Điều khoản sử dụng',
        'Liên hệ',
        'Game bài đổi thưởng',
        'Play game online',
        'Tỷ lệ kèo',
        'Phim mới',
        'Rồng bạch kim',
        'quangnm.live trực tiếp bóng đá',
    ];
    return (
        <div className={style.footer} style={{ top: topFooter }}>
            <div className={style.wrapper}>
                <div className={style.description}>
                    <p className={style.content}>
                        Phim mới cập nhật liên tục, Xem phim online chất lượng cao, phim thuyết minh, phim Vietsub. Cập
                        nhật các bộ phim bom tấn HOT liên tục hàng ngày 24/7
                    </p>
                    <>
                        <ul className={style.listType}>
                            {listType.map((item, index) => {
                                return (
                                    <li key={index} className={style.typeItem}>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                        <a href="https://www.facebook.com/">
                            <img src={facebook} alt="facebook" className={style.iconLink} />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src={instagram} alt="instagram" className={style.iconLink} />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <img src={linkedin} alt="linkedin" className={style.iconLink} />
                        </a>
                        <a href="https://twitter.com/">
                            <img src={twitter} alt="twitter" className={style.iconLink} />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img src={youtube} alt="youtube" className={style.iconLink} />
                        </a>
                    </>
                </div>
            </div>
            <div className={style.wrapperLogo}>
                <img className={style.logo} src={logo} alt="Phim mới 88 | Xem Phim Mới Nhanh, Chất Lượng Full HD" />
            </div>
        </div>
    );
}

export default FooterPage;

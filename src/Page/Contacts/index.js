import style from './Contacts.module.scss';

import imgBanner from '../../mockData/Const';
import MenuRightNav from '../../Component/MenuRightNav';
import GroupListRankFilmItem from '../../Component/GroupListRankFilmItem';
import Category from '../../Component/Category';

function Contacts() {
    const listTypeFilm = [
        'Phim Mới',
        'Phim Chiếu Rạp',
        'Phim Hành Động',
        'Phim Hoạt Hình',
        'Phim Tình Cảm - Lãng Mạn',
        'Phim Hàn Quốc',
        'Phim Trung Quốc',
    ];
    return (
        <div className={style.home}>
            <div className={style.banner}>
                <img src={imgBanner} className={style.bannerImg} alt="ảnh chưa load ra" />
            </div>
            <div className={style.columBackGround}>
                <div className={style.backGroundLeft}>
                    <Category />
                    <span className={style.title}>Liên hệ</span>
                    <p className={style.description}>
                        Là website cung cấp Phim mới trực tuyến hàng đầu Việt Nam. Trên 15+ thể loại Phim với nội dung
                        hấp dẫn, cập nhật liên tục 24/24h thông tin về các Đạo diễn, Diễn viên trong và ngoài nước, Phim
                        đã trở thành địa chỉ yêu thích của những người nghiện Phim:
                    </p>

                    <p className={style.description}> Các nội dung Phim Chất cung cấp bao gồm:</p>
                    <ul className={style.listTypeFilm}>
                        {listTypeFilm.map((elm, index) => {
                            return (
                                <li key={index} className={style.type}>
                                    {elm}
                                </li>
                            );
                        })}
                    </ul>
                    <p className={style.description}>
                        {' '}
                        Được chính thức đưa vào hoạt động từ năm 2018, website kho dữ liệu phim phong phú, hệ thống dữ
                        liệu khổng lồ, đa dạng, đáp ứng nhu cầu tra cứu và cập nhật thông tin nhanh chóng của đông đảo
                        các tín đồ mê phim
                    </p>
                    <p className={style.description}>
                        {' '}
                        Với kinh nghiệm 3 năm phát triển, cùng sự đầu tư kỹ càng cả về chất và lượng, Phim Chất đã và
                        đang mang đến những dịch vụ tiện ích nhất, được đông đảo người dùng đón nhận. Đến nay, Phim có
                        khoảng 1 triệu lượt truy cập/tháng, 35.000 user/ngày. Số lượng phim được cập nhật liên tục
                        24/24h hàng ngày.
                    </p>
                    <p className={style.description}>
                        {' '}
                        Là bến đỗ lý tưởng nhất cho những tín đồ mê phim, những con người có niềm đam mê mãnh liệt với
                        những bộ phim HOT. Đến đây, họ dễ dàng "lục tìm" lại những bộ phim, những khoảnh khắc làm nên
                        lịch sử của các diễn viên, đạo diễn, xem lại những bộ phim đi cùng năm tháng.
                    </p>
                    <p className={style.description}>
                        {' '}
                        Cập nhật các bộ phim chiếu rạp, Top IMBD... mới nhất hay mãn nhãn trước những thước phim mãn
                        nhãn của các bộ phim hành động Mỹ. Với đặc thù của một chuyên trang hàng đầu về phim mới tin bài
                        của Phim phản ánh đầy đủ một thế Phim HOT - món ăn tinh thần đã và đang chiếm trọn tình yêu của
                        hàng triệu tín đồ mê Phim
                    </p>
                </div>
                <div className={style.backGroundRight}>
                    <MenuRightNav />
                    <GroupListRankFilmItem />
                </div>
            </div>
        </div>
    );
}

export default Contacts;

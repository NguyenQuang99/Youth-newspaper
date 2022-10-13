import imgBanner from './images/i9bet-1-728x90.gif';
import imgFirst from './images/cam-tu-nam-ca-695x290.jpg';
import imgSecond from './images/dung-noi-doi-anh-695x290.jpg';
import imgThird from './images/duoc-vuong-dai-nhan-than-yeu-695x290.jpg';
import imgFour from './images/khuynh-the-cam-lan-coc-vu-lai-695x290.jpg';
import imgFive from './images/su-gia-xin-tu-trong-695x290.jpg';
import boruto from './images/boruto-naruto-the-he-tiep-theo-156x230.jpg';

function importAll(r) {
    return r.keys().map(r);
}

const listFilmsImgs = importAll(require.context('./films', false, /\.(png|jpe?g|svg)$/));
const listFilmsImgOdds = importAll(require.context('./flmsOdd', false, /\.(png|jpe?g|svg)$/));
const cartoonss = importAll(require.context('./cartoons', false, /\.(png|jpe?g|svg)$/));

function newArray(array) {
    const listItem = array.map((elm, index) => {
        let title = elm.substr(14, elm.indexOf(1)).replace(/-/g, ' ');
        let practice = Math.floor(Math.random() * 100) + 1 + ' Tập';
        return { image: elm, title: title, practice: practice };
    });
    return listItem;
}

const listFilmsImg = newArray(listFilmsImgs);
const listFilmsImgOdd = newArray(listFilmsImgOdds);
const cartoons = newArray(cartoonss);

export const NavBarMenu = [
    {
        title: 'Thể loại',
        subMenu: [
            'Phim hành động',
            'Phim viễn tưởng',
            'Phim chiến tranh',
            'Phim hình sự',
            'Phim phiêu lưu',
            'Phim hài hước',
            'Phim võ thuật',
            'Phim kinh dị',
            'Phim hồi hộp - Gay cấn',
            'Phim bí ẩn - Siêu nhiên',
            'Phim cổ trang',
            'Phim thần thoại',
            'Phim tâm lý',
            'Phim tài liệu',
            'Phim tình cảm - Lãng mạn',
            'Phim hoạt hình',
        ],
        left: '80px',
    },
    {
        title: 'Quốc gia',
        subMenu: [
            'Trung Quốc',
            'Hàn Quốc',
            'Mỹ',
            'Nhật Bản',
            'Hồng Kong',
            'Ấn Độ',
            'Thái Lan',
            'Pháp',
            'Đài Loan',
            'Úc',
            'Anh',
            'Cannada',
        ],
        left: '186px',
    },
    { title: 'Phim bộ', subMenu: ['Trung Quốc', 'Hàn Quốc', 'Mỹ', 'Hồng Kong', 'Thái Lan', 'Đài Loan'], left: '295px' },
    {
        title: 'Phim lẻ',
        subMenu: [
            'Năm 2020',
            'Năm 2016',
            'Năm 2012',
            'Năm 2019',
            'Năm 2015',
            'Năm 2018',
            'Năm 2011',
            'Năm 2014',
            'Năm 2010',
            'Năm 2017',
            'Năm 2013',
            'Năm 2009',
        ],
        left: '402px',
    },
    { title: 'Chiếu rạp' },
    { title: 'Top IMDB' },
];

export default imgBanner;
export const arrayImg = [imgFirst, imgSecond, imgThird, imgFour, imgFive];

export { boruto, listFilmsImg, listFilmsImgOdd, cartoons };

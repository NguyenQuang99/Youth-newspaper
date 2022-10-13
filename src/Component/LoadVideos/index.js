import style from './LoadVideos.module.scss';
import video from '../../mockData/video/HẸN KIẾP TƯƠNG PHÙNG - K-ICM ft. Long Nón Lá (Live Performance).mp4';

function LoadVideos() {
    return (
        <video className={style.wrapper} controls>
            <source src={video} type="video/mp4" />
            Phim đang được hệ thống cập nhật. Vui lòng quay lại vào thời gian khác...
        </video>
    );
}

export default LoadVideos;

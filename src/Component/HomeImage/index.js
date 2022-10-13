import style from './HomeImage.module.scss';
import { useState, useEffect } from 'react';
import { arrayImg } from '../../mockData/Const';

function HomeImage() {
    const [imgCurrent, setImgCurrent] = useState(arrayImg[0]);
    const [countImg, setCountImg] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImgCurrent(arrayImg[Math.floor(Math.random() * arrayImg.length)]);
            setCountImg(countImg + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [imgCurrent, countImg]);

    return (
        <div className={style.imgBackground}>
            <img src={imgCurrent} className={style.bannerImg} alt="Ảnh không load được" />
            <div className={style.circleCheck}></div>
        </div>
    );
}

export default HomeImage;

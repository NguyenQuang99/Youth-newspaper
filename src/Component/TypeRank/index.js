import style from './TypeRank.module.scss';

function TypeRank({ title }) {
    return <button className={style.wrapper}>{title}</button>;
}

export default TypeRank;

import style from './SearchBox.module.scss';

function SearchBox() {
    return <input className={style.search} type="text" placeholder="Nhập tên phim..." />;
}

export default SearchBox;

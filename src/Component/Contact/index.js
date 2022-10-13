import { Link } from 'react-router-dom';
import style from './Contact.module.scss';

function Contact() {
    return (
        <Link to="/lien-he" className={style.buttonContact}>
            Liên hệ
        </Link>
    );
}

export default Contact;

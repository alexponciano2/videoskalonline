import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>KalFlix</span>
            </Link>
            <nav>                
                <Link to="https://wa.link/yurlym" target="_blank">WhatsApp</Link>
                <Link to="https://alexponciano2.github.io/kalsale/">Loja</Link>
            </nav>
        </header>
    );
}

export default Header;
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <span>KalFlix</span>
            <nav>
                <a href="#">Videos</a>
                <a href="#">Loja</a>
            </nav>
        </header>
    );
}

export default Header;
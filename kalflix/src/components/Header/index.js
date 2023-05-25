import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <span>KalFlix</span>
            <nav>
                <a href="https://github.com/alexponciano2" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/alex-ponciano/">LinkedIn</a>
            </nav>
        </header>
    );
}

export default Header;
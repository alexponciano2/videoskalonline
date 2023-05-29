import erro404 from "./erro-404.png"
import styles from "./PageNotFound.module.css"
import Header from "../../components/Header/"
import Footer from "../../components/Footer/"


function PageNotFound() {
    return (
        <>
        <Header/>
        <section className={styles.container}>
            <h2>Ops, Página não localizada!</h2>
            <img src={erro404} alt="Logo de Página não localizada"/>
        </section>
        <Footer/>
        </>
    );
}

export default PageNotFound;
import styles from "./Category.module.css"
import videos from "../../json/db.json"

export const categories = [
    "INTRODUÇÃO",
    "Melhor do Ano!",
    "2007, 2008 e 2009",
    "2010, 2011, 2012, 2013, 2014, 2015, 2016 e 2017",
    "2022 e 2023 (BOPE)"
  ]
  
 export function filterCategory(id){
    return videos.filter((video) => video.category === categories[id])
  }

function Category({category, children}) {
    return (
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Category;
import styles from "./SearchVideoList.module.css"
import { useState } from "react";
import VideoList from "../../components/VideoList/index";


function filterVideos(videos, searchText) {
    return videos.filter(video => video.category.toLowerCase().includes(searchText)) || 
           videos.filter(video => video.title.toLowerCase().includes(searchText))
  }


function SearchVideoList({ videos }) {
    const [searchText, setSearchText] = useState("")
    const filteredVideos = filterVideos(videos, searchText)

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <VideoList videos={filteredVideos} />
        </section>
    );

}

export default SearchVideoList;
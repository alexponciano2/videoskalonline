import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"

const categories = [
  "INTRODUÇÃO",
  "2007 a 2009",
  "2010 a 2016",
  "2022 até agora (BOPE)"
]

function filterCategory(id){
  return videos.filter((video) => video.category === categories[id])
}

function App() {
  return (
    <>
      <Header />
      <Container>
      <Category category={categories[0]}>
          {filterCategory(0).map((video)=> <Card id={video.id} key={video.id}/>)}
      </Category>

      <Category category={categories[3]}>
          {filterCategory(3).map((video)=> <Card id={video.id} key={video.id}/>)}
        </Category>

        <Category category={categories[2]}>
          {filterCategory(2).map((video)=> <Card id={video.id} key={video.id}/>)}
        </Category>

        <Category category={categories[1]}>
          {filterCategory(1).map((video)=> <Card id={video.id} key={video.id}/>)}
        </Category>

        

        

        

        

      </Container>

      <Footer />
    </>
  );
}

export default App;

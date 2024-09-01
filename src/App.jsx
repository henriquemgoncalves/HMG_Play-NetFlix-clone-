import { useEffect, useState } from 'react'
import './App.css'
import tmdb from './tmdb'
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdb.getHomeList();
      console.log(list);
      setMovieList(list);

      //Pegando Featured
      let action = list.filter(i=>i.slug === 'action');
      let randomChosen = Math.floor(Math.random() * (action[0].items.results.length - 1));
      let chosen = action[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'movie');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  return (
    <div className="App">
      <Header />
      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        {movieList.map((item,key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <Footer/>
    </div>
  )
}

export default App

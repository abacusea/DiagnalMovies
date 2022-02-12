import { useEffect, useState, useContext } from "react";
import Movies from "./components/Movies";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import { SearchContext } from "./context/search-context";
import { MovieContext } from "./context/movies-context";

const App = ({...props}) => {
  const { moviesReducer } = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();

  const moviesContext = useContext(MovieContext)
  const [page, setPage] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const searchContext = useContext(SearchContext);

  useEffect(() => {
    const infiniteScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight && searchContext.query === ''
      ) 
      {
        let newPage = page;
        newPage++;
        setPage(newPage)
        fetchMovies(newPage)
      }
    };
    window.addEventListener('scroll', infiniteScroll, { passive: true });
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [page]);

  const fetchMovies = (data) => {
    dispatch({ type: `PAGE_NO_${data}` })
  }


  const renderMovies = (
    <>
      {moviesContext.movies.map(data => ( 
        <Movies title={data.page.title} movies={data.page['content-items'].content} scrollPosition={scrollPosition} /> 
      ))}
    </>
  )
  return (
    <>
    
      <Header />
      {renderMovies}
      
    </>
  );
}

export default App;

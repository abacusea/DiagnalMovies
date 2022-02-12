import {
    HeaderWrapper,
    MovieGenre,
    BackButton,
    SearchBar,
    LeftPane,
    One, SearchInput, SearchButton
  } from "./Header.styles";
import Back from '../images/Back.png'
import Search from '../images/search.png'
import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchContext } from "../context/search-context";
import { MovieContext } from "../context/movies-context";

var styles = {
    title_sm: { fontSize: '1rem', marginLeft: "1rem", lineHeight: "1rem"},
    title_lg: { fontSize: '1rem', marginLeft: "1rem", lineHeight: "1rem" }
}

  const Header = (props) => {
    const { moviesReducer } = useSelector((state) => ({ ...state }));

    const moviesContext = useContext(MovieContext)
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState(``);
    const searchContext = useContext(SearchContext);
    
    useEffect(()=> {
        searchQueryHandler()
        movieListHandler()
    },[searchValue])

    const searchQueryHandler = () => {
        searchContext.searchHandler(searchValue);
    };

    const movieListHandler = () => {
        const copyMovieList = moviesReducer;
        const newMoviesArr = [];
   
        copyMovieList.forEach((val, idx) => {
            val.page['content-items'].content.filter(movie => 
                movie.name.toLowerCase().includes(searchValue.toLowerCase()) ? newMoviesArr.push(movie) :"" 
            )
            val.page['content-items'].content = newMoviesArr;
         });

         console.log("copyMovieList:", copyMovieList, "moviesContext:", moviesContext.movies, "moviesReducer:", moviesReducer)
         moviesContext.movieHandler(copyMovieList)
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const searchBar = (
        <>
        {search ? 
            <><SearchInput 
                type="search" name="search" 
                placeholder="Search" onChange={handleSearch} 
            /><SearchButton type="submit" /></>
            :
            <SearchBar src={Search} alt="..." onClick={()=>setSearch(true)}/> 
            }
        </>
    )
    return (
      <HeaderWrapper>
        <LeftPane>
            <BackButton src={Back} alt="..." onClick={()=>setSearch(false)} />
            <MovieGenre 
                style={search ? styles.title_sm: styles.title_lg}
            >Romantic Comedy</MovieGenre>
        </LeftPane>
        <One>
        
        {searchBar}
      </One>
      </HeaderWrapper>
    );
  }
  
  export default Header;
  
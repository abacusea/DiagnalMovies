import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const MovieContext = React.createContext({
  movies: [],
  movieHandler: () => {},
});

const MovieContextProvider = (props) => {
    const { moviesReducer } = useSelector((state) => ({ ...state }));
    const [movies, setMovies] = useState(moviesReducer);

    const movieHandler = (data) => {
        setMovies(data);
    };

    useEffect(() => {
       setMovies(moviesReducer)
    }, [moviesReducer])

    return (
        <MovieContext.Provider
            value={{ movies, movieHandler }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
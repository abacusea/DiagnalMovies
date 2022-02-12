import React from 'react';
import {
  MoviesContainer,
  MoviesRow,
} from "./Movies.styles";
import Gallery from './Gallery';
import {ErrorBoundary} from 'react-error-boundary'


function Movies({ title, movies, scrollPosition }) {
  function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert" style={{alignSelf: "center"}}>
        <p style={{textAlign: "center"}}>No Image here!</p>
      </div>
    )
  }
  const myErrorHandler = (error, info) => {
    console.log(error, info)
  }
  return (
    <MoviesContainer>
      <MoviesRow>
        {movies.map((movie) => (
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={myErrorHandler}
            onReset={() => {
              // reset the state of your app so the error doesn't happen again
            }}
          >
            <Gallery movie={movie} scrollPosition={scrollPosition}/>
          </ErrorBoundary>
        ))}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default React.memo(Movies);

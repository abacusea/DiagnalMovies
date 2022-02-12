import {
  MoviesPoster,
  MovieTitle
} from "./Gallery.styles";


const Gallery = ({ movie }) => {
    
  return (
    <div>
        <MoviesPoster 
            src={require(`../images/${movie['poster-image']}`).default}
            alt={movie.name}
            loading="lazy"
        />
        <MovieTitle>{movie.name}</MovieTitle>
    </div>
  );
}

export default Gallery;

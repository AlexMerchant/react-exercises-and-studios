import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Howl's Moving Castle", "Oppenheimer", "Burnt After Reading"];
      return (
      <div>
         <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
         <ol>
            {movies.map(movie => <li className={classes.movieText}>{movie}</li>)}
         </ol>
      </div>
      );
   }
}

export default MovieList;
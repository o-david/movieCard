import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({list}) => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">Movie List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {list.map((movie, index) => (
                <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating} />
            ))}
        </div>
    </div>
  )
}

export default MovieList
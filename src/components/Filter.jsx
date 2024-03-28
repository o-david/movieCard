import React from "react";
import MovieCard from "./MovieCard";

const Filter = ({ list, title, rating }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Filtered by {title && `title: ${title} `}{" "}
        {rating && ` rating: ${rating}`}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {title &&
          rating &&
          list
            .filter((movie) =>
              movie.title.toLowerCase().includes(title.toLowerCase())
            )
            .filter((movie) => movie.rating == rating)
            .map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}
              />
            ))}
        {title &&
          !rating &&
          list
            .filter((movie) =>
              movie.title.toLowerCase().includes(title.toLowerCase())
            )
            .map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}
              />
            ))}
        {!title &&
          rating &&
          list
            .filter((movie) => movie.rating == rating)
            .map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}
              />
            ))}
      </div>
    </div>
  );
};

export default Filter;

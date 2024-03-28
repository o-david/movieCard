import React from 'react'

const MovieCard = ({title={}, description, posterURL, rating}) => {
  return (
    <div className=' w-full overflow-hidden border group'>
         <div className="flex items-center justify-center overflow-hidden w-full aspect-square border border-red-200">
        <img className='w-full group-hover:scale-110  scale-100 transition-transform transform' src={posterURL} alt={title} />

         </div>
        <h3 className=' text-[2rem]'>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        
    </div>
  )
}

export default MovieCard
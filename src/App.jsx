import { useState } from 'react'
import './App.css'
import data from './data'
import MovieList from './components/MovieList'
import Filter from './components/Filter'

function App() {
  const [movies, setMovies] = useState(data)
  const [error, setError] = useState("")
  const [filterByTitle, setFilterByTitle] = useState('')
  const [filterByRating, setFilterByRating] = useState()
  const [newmovie, setNewMovie] = useState({
    title:'',
    description:'',
    posterURL:'',
    rating:0,
  })
  function handleSubmit(e) {
    e.preventDefault()
    if(!newmovie.title || !newmovie.description || !newmovie.posterURL){setError('Please fill all fields'); return 0}
    setMovies([...movies, newmovie])
    setNewMovie({
      title:'',
      description:'',
      posterURL:'',
      rating:0,
    })
    
  }
  return (
   <>
   <div>
    <input type="text" placeholder='Filter by title' value={filterByTitle} onChange={(e) =>setFilterByTitle(e.target.value)} />
    <input type="number" placeholder='Filter by rating' value={filterByRating} onChange={(e) =>setFilterByRating(e.target.value)} />
    <div>
      <p>Add Movie</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' value={newmovie.title} onChange={(e) => setNewMovie({...newmovie, title: e.target.value})}/>
        <input type="text" placeholder='Description' value={newmovie.description} onChange={(e) => setNewMovie({...newmovie, description: e.target.value})}/>
        <input type="text" placeholder='Paste imagee Url' value={newmovie.posterURL} onChange={(e) => setNewMovie({...newmovie, posterURL: e.target.value})}/>
        <input type="number" placeholder='Rating' value={newmovie.rating} onChange={(e) => setNewMovie({...newmovie, rating: e.target.value})}/>
        <button type="submit">Add</button>  
        {error && <p className='text-[red]'>{error}</p>}   
      </form>
    </div>
   </div>

   {
    (filterByRating || filterByTitle)?<Filter list={movies} rating={filterByRating} title={filterByTitle}/> :<MovieList list={movies}/>
   }
    
   </>
  )
}

export default App

import React, { useContext } from 'react'
import { Theme } from '../App'

function MovieCard({img, name , description , releaseDate}) {
    const [darktheme , setdarktheme] = useContext(Theme)
  return (
    <div className='ml-4 mb-10 h-auto rounded-md bg-black py-2 px-1'  style={darktheme?{background:"white"}:{background:"white"}}>
        <div className=' py-4 bg-black'>
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="no internet connections" className=' rounded-md h-full' />
            <h1 className=' text-orange-500 font-semibold text-xl'>Movie: {name}</h1>
            <h1 className=' text-white text-sm'>{description.substr(0,100)}..</h1>
            <h1 className=' text-slate-500'>Release Date: {releaseDate}</h1>

        </div>
    </div>
  )
}

export default MovieCard
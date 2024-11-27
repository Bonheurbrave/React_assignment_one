import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import s from './s.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { nextpage, prevpage } from '../store/pageSlice'
import { Theme } from '../App'
const MovieComponent = () => {
    const [darktheme , setdarktheme] = useContext(Theme)
    const pagenber = useSelector((state)=>state.page.page)
    const [movie,setmovie] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{ 
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6cf6d6fdffe0ca8d35a81e85a4543d6d&page=${pagenber}`)
    .then(res=>{
        setmovie(res.data.results)
    })
    },[dispatch(prevpage) , dispatch(nextpage)])
    console.log(movie)
  return (
    <>
    <div className=' py-5 grid grid-cols-4'>
        {
            movie.map((movie)=>{
                return (
                    <div className=' w-full' style={darktheme?{background:"black"}:{background:"white"}}>
                        <MovieCard img={movie.poster_path} description={movie.overview} name={movie.title} releaseDate={movie.release_date} />
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default MovieComponent
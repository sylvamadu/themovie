import { makeStyles, Grid, Button} from '@material-ui/core';
import React,{useState, useEffect} from 'react';
import Header from '../Components/Header';
import MovieList from '../Components/MovieList';
import axios from 'axios';

const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#424141',
    color: '#fff'
  },
  footer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#424141',
    color: '#fff',
    margin: theme.spacing(2,0),
  }
}))

function Home() {
  const classes = useStyles()
  const [movies, setMovies] = useState([])
  const[isLoading, setIsLoading] = useState(true)
  

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=834f200210f8a65440dc553ab00d5930&page=${localStorage.getItem('page') ?localStorage.getItem('page'):1 }`)
    .then((response)=>{
        setMovies(response.data)
        setIsLoading(false)
        console.log(movies) 
    })
    .catch((error)=>{
        console.log(error.message)
    })
  },[])

  async function fetchmovies(page){
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=834f200210f8a65440dc553ab00d5930&page=${page}`)
    .then((response)=>{
        setMovies(response.data)
        setIsLoading(false)
        console.log(movies) 
        localStorage.setItem('page',page)
    })
    .catch((error)=>{
        console.log(error.message)
    })
  }
  
  return (
    <div className={classes.root}>
     <Header />
     <MovieList movies={movies} isLoading={isLoading}/>
     <Grid container alignItems='center' justifyContent='center' spacing={1}>
     {
        [1,2,3,4,5,6,7,8,9,10].map((ele)=>(
          <Grid item key={ele}>
            <Button variant='contained'
              style={{background:'#032541', marginBottom:'1em',color:'#fff'}}
              onClick={()=>fetchmovies(ele)}>{ele}
            </Button>
          </Grid>
        ))
      }
      </Grid>
      <footer className={classes.footer}>
        <p>ThemoviesdotNet | 2022 &copy; copyright reserved</p>
      </footer>
    </div>
  )
}

export default Home
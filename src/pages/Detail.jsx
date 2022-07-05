import React,{useState, useEffect} from 'react';
import Header from '../Components/Header';
import { makeStyles, Grid} from '@material-ui/core';
import {useParams } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: '#424141',
    color: '#fff',
  },
  hero:{
    margin: '5em 0 2em',
    backgroundSize:'cover',
    [theme.breakpoints.down('sm')]: {
      backgroundSize:'cover',
    },
  },
  content:{
    marginTop: '8em',
    marginLeft: '1em',
    [theme.breakpoints.up('md')]: {
      marginTop: '5em',
      marginLeft: '3em',
    },
  },
  title:{
    textTransform: 'uppercase',
    margin: '2em 0',
    fontSize: '1.5em',
    [theme.breakpoints.up('md')]: {
      margin: '2em 0',
    fontSize: '2.5em',
    },
  },
  tag:{
    margin:'0 1em '
  },
  overview: {
    width: '100%',
    lineHeight: 1.6,
    [theme.breakpoints.up('md')]: {
      width: '45vw'
    },
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

function Detail() {
  const classes = useStyles()
  const [detailMovie, setDetailMovie] = useState([])
  let {id} = useParams()
  const movie_id = id.substring(1)
  localStorage.setItem('movie_id',movie_id)
  
  

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id ? movie_id : localStorage.getItem('movie_id')}?api_key=834f200210f8a65440dc553ab00d5930`)
    .then((response)=>{
        setDetailMovie(response.data)
    })
    .catch((error)=>{
        console.log(error.message)
    })
  },[])

  console.log(detailMovie)  
  return (
    <div className={classes.root} >
      <Header />
          <div className={classes.hero} key={detailMovie.id}
          style={{
            background:  `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.55)),url('https://image.tmdb.org/t/p/original${detailMovie.backdrop_path}')`,
            height: '100vh',
            width: '100vw',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
          }}
          >
            <div className={classes.content}>
                <h1 className={classes.title}>{detailMovie.title}</h1>
                <Grid container alignItems='center' justifyContent='flex-start' >
                    <Grid item className={classes.tag}>{detailMovie.adult?'18+':'13+'}</Grid> 
                    <Grid item className={classes.tag}>Vote Count: {detailMovie.vote_count}</Grid> 
                    <Grid container alignItems='center' justifyContent='flex-start' >{detailMovie.genres?.map(item=>(
                      <Grid item className={classes.tag} key={item.id}>{item.name}</Grid>
                    ))}
                    </Grid> 
                    <Grid item className={classes.tag}>Popularity: {detailMovie.popularity}</Grid>
                </Grid>
                <p className={classes.overview}>
                  {detailMovie.overview}
                </p>
            </div>
          </div>
     
      <footer className={classes.footer}>
        <p>ThemoviesdotNet | 2022 &copy; copyright reserved</p>
      </footer>
    </div>
  )
}

export default Detail
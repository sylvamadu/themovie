import {Grid, Container, makeStyles, Card, CardMedia, CardContent, Button} from '@material-ui/core';
import React from 'react';
import {Link } from "react-router-dom";


const useStyles = makeStyles((theme)=>({
  root: {
   margin: '6em 0 2em 0',
   width: '100%',
  },
  container: {
    margin: '1em 0',
  },
  card:{
    height: '100%',
    boxShadow: '1px 2px 1px grey',
    background: 'inherit'
  },
  cardMedia:{
    height: '80.75%'
  },
  cardlink:{
    textDecoration: 'none',
  },
  loading:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    height: '100vh'
  }
  
}))
function MovieList({movies,isLoading}) {
  const classes = useStyles()
  
//   const[page, setPage] = useState(0)

//   const BASE_URL = 'https://api.themoviedb.org/3'
//   const Movie_list = '/discover/movie'
//   const movie_detail = '/movie/453395'
//   const API = '?api_key=834f200210f8a65440dc553ab00d5930'
//   const Image_url ='https://image.tmdb.org/t/p/w500'

  
  

  return (
    <Container maxWidth='lg' className={classes.root}>
        <h1>Welcome to the Trending Movies</h1>
        <Grid container spacing={3} className={classes.container}>
            {
               isLoading ? <div className={classes.loading}>Loading...</div> : (
                movies.results.map((item)=>(
                    <Grid item xs={12} sm={4} md={3} key={item.id}>
                      <Link to={`/movie:${item.id}`} className={classes.cardlink}>
                          <Card className={classes.card}>
                            <CardMedia
                            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            component="img"
                            className={classes.cardMedia}
                            alt='movie'
                            />
                            <CardContent style={{textAlign: 'center', marginTop:'-1.4em', fontWeight: 'bold', color: 'white'}}>
                                <h3>{item.title}</h3>
                            </CardContent>
                          </Card>
                      </Link>
                    </Grid>
               ) 
                ))
            }
        </Grid>
    </Container>
  )
}

export default MovieList
import {AppBar, Grid, makeStyles, Toolbar} from '@material-ui/core';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate,Link } from "react-router-dom";

const useStyles = makeStyles((theme)=>({
  root: {
    background: '#032541',
    color: '#fff',
  },
  left:{
    display: 'flex',
  },
  name:{
    marginRight: theme.spacing(1),
  },
  link:{
    textDecoration: 'none',
    color: '#fff'
  }
}))
function Header() {
  const classes = useStyles()
  let navigate = useNavigate();

  const logout =()=>{
    localStorage.removeItem('tokenuser')
    navigate("/signin", { replace: true });
  }

  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center' >
          <Grid item>
            <Link to='/' className={classes.link}>
              <h1>ThemoviesdotNet</h1>
            </Link>
          </Grid>
          <Grid item className={classes.left}>
            <p className={classes.name}>Hi, {localStorage.getItem('firstnameuser')} {localStorage.getItem('lastnameuser')}</p>
            <Button variant='outlined' onClick={logout} >Logout</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
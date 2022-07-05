import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Register() {
  let navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if(!data.get('email') || !data.get('password') ||
     !data.get('firstname') ||
      !data.get('lastname') ||
       !data.get('mobilenumber') ||
        !data.get('address')|| !data.get('confirmpassword')) return
    
    //create a user
    await axios.post(`https://qag4ih5s2h.execute-api.us-east-1.amazonaws.com/dev/user/create-user`,{
      email: data.get('email'),
      password: data.get('password'),
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      mobilenumber: data.get('mobilenumber'),
      address: data.get('address'),
      confirmpassword: data.get('confirmpassword'),
      usertype: 7
    })
    .then((response)=> {
      console.log(response.data)
      navigate("/signin", { replace: true });
    })
    .catch((error)=> console.log(error.message))

    console.log({
      email: data.get('email'),
      password: data.get('password'),
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      mobilenumber: data.get('mobilenumber'),
      address: data.get('address'),
      confirmpassword: data.get('confirmpassword'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,}}>
            <Grid container maxWidth="md">
              <Grid item sm={6} xs={12}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
                autoFocus
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
                autoFocus
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="mobilenumber"
                  label="Mobile Number"
                  name="mobilenumber"
                  type="number"
                  autoComplete="mobilenumber"
                  autoFocus
                />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
            </Grid>
            </Grid>
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register
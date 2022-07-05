import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './SignIn';
import Protected from './Protected';
import Register from './Register';
import Home from './pages/Home';
import Detail from './pages/Detail';


const theme = createTheme()
function App() {
 
  
  return (
    <ThemeProvider theme={theme}>
        <Router>  
          <div className='app'>
            <Routes>
              <Route path="/" element={<Protected><Home /></Protected>}/>
              <Route path="/movie:id" element={<Protected><Detail /></Protected>}/>
              <Route path="signin" element={<SignIn />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </div>
        </Router>
    </ThemeProvider>
  );
}

export default App;


import React from 'react';
import logo from '../../image/Logo.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/material';
import './Home.css';
// import topBanner from "../../image/top-1.png"
import { Grid } from '@mui/material';
import Categories from '../../Categories/Categories';

// const useStyles = makeStyles(styles);
const Home = () => {
  // const classes = useStyles();
  return (
    <Box style={{ marginBottom: "80px" }} sx={{ flexGrow: 1 }}>
      <AppBar className="" position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='header-link' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Blogs</a>
            <a href="">About Us</a>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <>
        <Grid container spacing={2} className="top-section">
          <div data-aos="fade-up" data-aos-delay="40" data-aos-easing="ease-in-out" className="col-2" xs={6}>
            {/* <img src={topBanner}></img> */}
            <Typography style={{ color: "#FA870F", fontWeight: "500" }} variant="h4" component="h5">
              Particularly Helpful
            </Typography>
            <Typography style={{ fontWeight: "500" }} variant="h1" component="h2">
              New Smart <br /> Speaker
            </Typography>
            <Button data-aos="fade-left" data-aos-delay="120" data-aos-duration="1200" data-aos-easing="ease-in-out" style={{ backgroundColor: "#9fb205", color: "white", padding: "10px 20px", borderRadius: "20px" }}> Shop Now</Button>
          </div>
          <div className="col-2" xs={6}>
            <Typography></Typography>
          </div>
        </Grid>
        <Categories></Categories>
        
      </>
    </Box>

  );
};

export default Home;
import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.png'
import styles from './Navbar.module.css'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
    marginLeft: 7,
    
  },

}));



export default function Navbar() {
  const classes = useStyles();


  const [ change, setChange ] = useState();
  const [ time  , setTime   ] = useState();

    setInterval(() => {
        setChange(Math.random());
    }, 1000);
    
    useEffect(() => {
        const today = new Date();
        setTime(today.toLocaleTimeString());
    }, [change]);   //jese hee 'change' ki value update hogi wese hi ye "useEffect" chalega


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
           <img src={logo} width="30" height="30"  alt="logo"/>
         
          <Typography variant="h6" className={classes.title}>
             COVID-19 TRACKER
          </Typography>

          <p style={{fontWeight: 'bolder'}}> {time} </p>
       
        </Toolbar>
      </AppBar>
    </div>
  );
}

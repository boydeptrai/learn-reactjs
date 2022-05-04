import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    link:{
        color:'white',
        textDecoration:'none'
    },

}))

export default function Header() {
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
            <CodeIcon sx={{ mr: 2 }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={classes.link} to ="/">SUPER AUTO</Link> 
          </Typography>

          <NavLink className={classes.link}  to="/todos"><Button color="inherit">Todos</Button></NavLink>
          <NavLink className={classes.link} to="/albums"><Button color="inherit">Albums</Button> </NavLink>
             
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


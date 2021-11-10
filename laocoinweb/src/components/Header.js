import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import logo from './../res/4478097.png'
import { width } from '@mui/system';

export default function Header(props) {


    const Logout = () => {
        localStorage.clear();
        window.location.href = '/login'
    }

    return (

        <AppBar >
            <Toolbar>
                <Link to='/wallet'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Link>
                <IconButton
                    size="large"
                    edge="start"
                    color="default"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <img src={logo} />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.title}
                </Typography>
                <IconButton
                    onClick={() => Logout()}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}>
                    <ExitToAppIcon />
                </IconButton>
            </Toolbar>
        </AppBar >

    );
}

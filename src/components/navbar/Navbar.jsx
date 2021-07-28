import React from 'react'
import { AppBar, IconButton,Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Toolbar } from '@material-ui/core'
import logo from '../../assets/e-commerce.jpg'
import {Link, useLocation}from 'react-router-dom'

import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar}  color="inherit"  >
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title}  color="inherit" >
                        <img src={logo} alt="Commerce" height="25px" className={classes.image}  />
                        SunRider Shop
                    </Typography>
                    <div className={classes.grow}   />
                    {location.pathname === '/' && (

                        <div className={classes.button}>
                        <Link to='/cart'>
                        <IconButton aria-label='Show cart items' color='inherit' >
                            <Badge badgeContent={totalItems} color='secondary' >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        </Link>
                    </div>
                        )  }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar

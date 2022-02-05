import React, { useState } from 'react';
import {AppBar, Button, Link, Menu, MenuItem, Toolbar, Typography} from '@material-ui/core'
import Styles from './Styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const classes = Styles();
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
      <AppBar position='fixed' className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" style={{cursor:"pointer",display:"flex",alignItems:"center"}} onClick={()=>navigate('/')} ><HomeIcon/> Tech Mahindra</Typography>
            <Button
                id="basic-button"
                color="inherit"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Add Product<ArrowDropDownIcon/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem name="down" onClick={()=>{handleClose(); navigate('/product/add/1')}}>Downloadable</MenuItem>
                <MenuItem name="s" onClick={()=>{handleClose(); navigate('/product/add/2')}}>Subscription-based</MenuItem>
                <MenuItem name="d" onClick={()=>{handleClose(); navigate('/product/add/3')}}>Delivery-based</MenuItem>
            </Menu>
            <Button onClick={()=>navigate('/products/cart')} style={{display:"flex",alignItems:"center",color:"white"}} underline='none' ><ShoppingCartIcon/>Cart</Button>
        </Toolbar>
      </AppBar>
  )
};

export default Navbar;

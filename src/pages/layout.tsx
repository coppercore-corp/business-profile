import React from "react";
import { Outlet } from "react-router-dom";
import { createPortal } from 'react-dom';
import { styled, useTheme } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

function Menu(){
    const theme = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const drawerWidth = 100+'%';
    const handleOpen = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsOpen(true);
    };
    const handleClose = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsOpen(false);
    }
    return (
        <>
            <a href="#" onClick={handleOpen}><i className="fa-solid fa-bars fa-2xl --font-white"></i></a>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
            variant="persistent"
            anchor="right"
            open={isOpen}
            >
                <DrawerHeader>
                    <IconButton onClick={handleClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {[
                        {name:'Home', link:'/'},
                        {name: 'Contacts', link :'/contacts/'},
                        {name:'Our Products', link:'/products/'}
                    ].map((item) => (
                        <ListItem key={item.link} disablePadding>
                            <ListItemButton href={item.link}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default function Layout() {
    const drawer = document.getElementById("drawer");
    return (
        <>
            {drawer ? createPortal(<Menu />, drawer) : null}
            <Outlet />
        </>
    )
}


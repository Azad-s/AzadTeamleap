import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import Home from "./assets/Home Logo.svg"
import Tasks from "./assets/My Tasks Logo.svg"
import Groups from "./assets/Groups Icon.svg"
import Goals from "./assets/Goals Logo.svg"
import Project from "./assets/Project Logo.svg"
import Profile from "./assets/Profile Logo.svg"

import Nav from "./assets/Add Task Top Nav Bar.svg"
import Bell from "./assets/Notification Bell.svg"
import Calendar from "./assets/Calendar.svg"
import Mail from "./assets/Mail.svg"
import Settings from "./assets/Settings.svg"
import Star from "./assets/Star.svg"


const drawerWidth = 240;

function Header(props) {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navList = [
        Nav,
        Star,
        Mail,
        Calendar,
        Bell,
        Settings,
    ]

    const list = [
        { text: "Home", icon: Home, link: "/home", index: 0 },
        { text: "My Tasks", icon: Tasks, link: "/tasks", index: 1 },
        { text: "Pods", icon: Groups },
        { text: "Goals", icon: Goals },
        { text: "Projects", icon: Project },
        { text: "Profile", icon: Profile },
    ]
    const [value, setValue] = useState(0)
    useEffect(() => {
        list.forEach((list) => {
            if (window.location.pathname === list.link) {
                setValue(list.index)
            }
        });
    })
    const drawer = (
        <div>
            <Toolbar sx={{ height: "115px" }} >
                <Typography variant='h4' sx={{ color: "#5433FF", fontWeight: "bold" }}>Teamleap</Typography>
            </Toolbar>
            <Divider sx={{ backgroundColor: "#5433FF", }} />
            <List sx={{ paddingTop: 0, }} >
                {list.map((list, index) => (
                    <React.Fragment>
                        <ListItem
                            key={index}
                            selected={value === list.index}
                            sx={{
                                "&.Mui-selected": {
                                    backgroundColor: "#E9E4FE",
                                    borderRadius: "0rem 0rem 38px 0rem !important",
                                    borderLeft: "#5433FF 9px solid",
                                    color: "#3A98D2 !important",
                                }
                            }}

                            disablePadding>
                            <ListItemButton onClick={() => window.location.href = list.link} >
                                <ListItemIcon sx={{ ml: "2rem" }}  >
                                    <img src={list.icon} alt="#" />
                                </ListItemIcon>
                                <ListItemText primary={list.text} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>


        </div>
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "115px",
                    background: "white",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack direction={"row"} alignItems="center" >
                        <img src={Groups} alt="#" />
                        <Typography variant='h5' sx={{ color: "black" }} >Pods</Typography>
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} />
                    <Stack direction={"row"} alignItems="center" spacing={2} >
                        {navList.map((navList, i) =>
                            <img src={navList} alt="#" />)
                        }
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{

                        width: "275px",
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,

                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        position: "relative",
                        width: "275px",
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            // paddingLeft: "2px"
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box>
                <Box sx={{ height: "115px" }} />
                {props.children === undefined ? <div /> : props.children}
            </Box>
        </Box>
    );
}



export default Header;


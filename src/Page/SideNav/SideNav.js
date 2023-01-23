import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TuneIcon from '@mui/icons-material/Tune';
import Container from '@mui/material/Container';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import useGetPerson from '../../Hooks/useGetPerson';


const bigdrawerWidth = 300;
const smalldrawerWidth = 220;

function SideNav(props) {


    const { data } = useGetPerson();
    console.log(data);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // const drawer = (

    // );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className="mx-h-auto min-h-[90vh]">
            <CssBaseline />


            <AppBar position="fixed"
                sx={{
                    width: { sm: `calc( ${bigdrawerWidth}px - 100%)` },
                    ml: { sm: `${bigdrawerWidth}px` },
                }}
            >
                <Container maxWidth="xl  bg-[#001c7b]">
                    <Toolbar className='d-flex justify-between'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Secqur<span className="text-red-600/100">AI</span>SE
                        </Typography>





                        <Box sx={{ flexGrow: 0 }} noWrap >

                            <Stack direction="row" spacing={2}>
                                <Search sx={{ display: { xs: 'none', sm: 'inline' }, m: 2 }}>
                                    <SearchIcon />
                                </Search>
                                <Button sx={{ display: { xs: 'none', sm: 'inline' }, m: 2 }} variant="contained" color="success" c>25</Button>
                                <Button sx={{ display: { xs: 'none', sm: 'inline' }, m: 2 }} variant="contained" color="error" c>25 </Button>
                            </Stack>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <div className='xs:hidden sm:hidden lg:block md:block'>
                <div className='h-[100%] bg-[#00b8f1] p-2 grid grid-cols-1  content-between ' >

                    <MenuIcon className='text-white'>
                    </MenuIcon>
                    <ExitToAppOutlinedIcon className='text-white'>
                    </ExitToAppOutlinedIcon>


                </div>
            </div>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${bigdrawerWidth}px)` } }}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            >

                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
            <Box
                // component="nav"
                sx={{ width: { sm: bigdrawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    anchor="right"
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: smalldrawerWidth },
                    }}
                >
                    <div>
                        <Toolbar className='flex justify-center'><TuneIcon /></Toolbar>
                        <Divider />
                        <List>
                            {data?.map(person => (
                                <ListItem key={person.key} disablePadding>
                                    <ListItemButton>
                                        {/* <ListItemText primary= /> */}
                                        <Typography>{person.ID}: {person.Location}</Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: bigdrawerWidth, marginTop: '70px' },

                    }}
                    anchor="right"
                    open >
                    <div>
                        <Toolbar className='flex justify-center'><TuneIcon /></Toolbar>
                        <Divider />
                        <List>
                            {data?.map(person => (
                                <ListItem key={person.key} disablePadding>
                                    <ListItemButton>
                                        {/* <ListItemText primary= /> */}
                                        <Typography>{person.ID}: {person.Location}</Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Box>
        </Box >
    );
}

SideNav.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SideNav;
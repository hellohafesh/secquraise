import React from 'react';

// const  = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Navbar;

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';


function Navbar() {






    return (
        <AppBar position="static">
            <Container maxWidth="xl  bg-[#001c7b]">
                <Toolbar className='d-flex justify-between'>

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





                    <Box sx={{ flexGrow: 0 }}>

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
    );
}
export default Navbar;
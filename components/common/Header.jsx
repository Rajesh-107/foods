import { MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsCartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { navLinks } from '../../src/navLinks';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //   setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event) => {
    //   setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //   setAnchorElNav(null);
    // };

    // const handleCloseUserMenu = () => {
    //   setAnchorElUser(null);
    // };

    return (
        // <AppBar position="static">
        //     <Container maxWidth="xl">
        //         <Toolbar disableGutters>
        //             <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        //             <Typography
        //                 variant="h6"
        //                 noWrap
        //                 component="a"
        //                 href="/"
        //                 sx={{
        //                     mr: 2,
        //                     display: { xs: 'none', md: 'flex' },
        //                     fontFamily: 'monospace',
        //                     fontWeight: 700,
        //                     letterSpacing: '.3rem',
        //                     color: 'inherit',
        //                     textDecoration: 'none',
        //                 }}
        //             >
        //                 LOGO
        //             </Typography>

        //             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        //                 <IconButton
        //                     size="large"
        //                     aria-label="account of current user"
        //                     aria-controls="menu-appbar"
        //                     aria-haspopup="true"
        //                     onClick={handleOpenNavMenu}
        //                     color="inherit"
        //                 >
        //                     <MenuIcon />
        //                 </IconButton>
        //                 <Menu
        //                     id="menu-appbar"
        //                     anchorEl={anchorElNav}
        //                     anchorOrigin={{
        //                         vertical: 'bottom',
        //                         horizontal: 'left',
        //                     }}
        //                     keepMounted
        //                     transformOrigin={{
        //                         vertical: 'top',
        //                         horizontal: 'left',
        //                     }}
        //                     open={Boolean(anchorElNav)}
        //                     onClose={handleCloseNavMenu}
        //                     sx={{
        //                         display: { xs: 'block', md: 'none' },
        //                     }}
        //                 >
        //                     {pages.map((page) => (
        //                         <MenuItem key={page} onClick={handleCloseNavMenu}>
        //                             <Typography textAlign="center">{page}</Typography>
        //                         </MenuItem>
        //                     ))}
        //                 </Menu>
        //             </Box>
        //             <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        //             <Typography
        //                 variant="h5"
        //                 noWrap
        //                 component="a"
        //                 href=""
        //                 sx={{
        //                     mr: 2,
        //                     display: { xs: 'flex', md: 'none' },
        //                     flexGrow: 1,
        //                     fontFamily: 'monospace',
        //                     fontWeight: 700,
        //                     letterSpacing: '.3rem',
        //                     color: 'inherit',
        //                     textDecoration: 'none',
        //                 }}
        //             >
        //                 LOGO
        //             </Typography>
        //             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        //                 {pages.map((page) => (
        //                     <Button
        //                         key={page}
        //                         onClick={handleCloseNavMenu}
        //                         sx={{ my: 2, color: 'white', display: 'block' }}
        //                     >
        //                         {page}
        //                     </Button>
        //                 ))}
        //             </Box>

        //             <Box sx={{ flexGrow: 0 }}>
        //                 <Tooltip title="Open settings">
        //                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        //                         <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        //                     </IconButton>
        //                 </Tooltip>
        //                 <Menu
        //                     sx={{ mt: '45px' }}
        //                     id="menu-appbar"
        //                     anchorEl={anchorElUser}
        //                     anchorOrigin={{
        //                         vertical: 'top',
        //                         horizontal: 'right',
        //                     }}
        //                     keepMounted
        //                     transformOrigin={{
        //                         vertical: 'top',
        //                         horizontal: 'right',
        //                     }}
        //                     open={Boolean(anchorElUser)}
        //                     onClose={handleCloseUserMenu}
        //                 >
        //                     {settings.map((setting) => (
        //                         <MenuItem key={setting} onClick={handleCloseUserMenu}>
        //                             <Typography textAlign="center">{setting}</Typography>
        //                         </MenuItem>
        //                     ))}
        //                 </Menu>
        //             </Box>
        //         </Toolbar>
        //     </Container>
        // </AppBar>

        <header className='w-full h-[90px] md:h-[60px] sticky  top-0 flex items-center bg-white z-50'>
            <div className="hidden md:flex container mx-auto items-center justify-between h-full">
                {/* leftside */}
                <div className='text-2xl font-bold text-black'>LoGo</div>
                {/* middleside */}
                <div className="w-[790px] h-full grid place-items-center">
                    <ul className="flex items-center  gap-12">
                        <li className='text-black font-bold hover:text-[#ABC480] hidden md:flex cursor-pointer container mx-auto items-center justify-between h-full'>
                            <Link href='/'>About</Link>
                        </li>
                        <li className='text-black hover:text-[#ABC480] font-bold hidden md:flex container mx-auto items-center justify-between h-full'>
                            <Link href='/'>Shops</Link>
                        </li>
                        <li className='text-black hover:text-[#ABC480] font-bold container items-center justify-between '>
                            <Link href='/'>Subscribe</Link>
                        </li>
                        <li className='hidden text-black hover:text-[#ABC480] font-bold md:flex container mx-auto items-center justify-between h-full'>
                            <Link href='/'>Bundle</Link>
                        </li>
                        <Link href='/'>
                        <li className='hidden text-black hover:text-[#ABC480] font-bold md:flex container mx-auto items-center justify-between h-full'>
                            Recpies
                        </li>
                        </Link>
                        
                        <li className='hidden text-black hover:text-[#ABC480] font-bold md:flex container mx-auto items-center justify-between h-full'>
                            <Link href='/'>Find</Link>
                        </li>
                        <li className='hidden text-black hover:text-[#ABC480] font-bold md:flex container mx-auto items-center justify-between h-full'>
                            <Link href='/'>More</Link>
                        </li>
                    </ul>
                </div>
                {/* rightside */}
                <div className=' h-full flex items-center justify-end'>
                    <ul className="h-full flex items-center gap-3" s>
                        <div className='flex justify-center items-center space-x-4'>
                            <BsCartFill className='text-green-500 h-8 w-8' />
                            <div className='text-xs'>
                                <h5 className='font-bold' >62 USD</h5>
                                <p>2 items</p>
                            </div>
                        </div>
                        <Link href='/login'>

                            <FaUser className='text-green-500 h-8 w-8' />
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

{/*  */ }
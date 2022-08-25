import React, {
  useState, 
  useContext
    } from 'react'

import styled from "@emotion/styled"

import { GlobalStateContext } from '../../../global/context/GlobalStateContext'

import { useNavigate } from 'react-router-dom'
import {
  goToHomePage,
  goToForumPage,
  goToAlbumsPage,
  goToTodoPage
} from "../../../routes/coordinator"

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { neutralColor } from '../../../constants/colors';

const CustomButton = styled(Button)`
  :hover {
    text-decoration: underline;
    color: ${neutralColor};
  }
`
const CustomTypography = styled(Typography)`
  margin-right: 0;
`
const LogoContainer = styled(Button)`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
    :hover {
    color: ${neutralColor};
  }
`
const pages = ['Fórum', 'Álbums', 'ToDo List'];

const LeftSide = () => {

  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    switch (page) {
      case "Fórum":
        goToForumPage(navigate)
        break
      case "Álbums":
        goToAlbumsPage(navigate)
        break
      case "ToDo List":
        goToTodoPage(navigate)
        break
      default:
        break
    }
  };

  return (
          <>
            <LogoContainer 
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              onClick={() => goToHomePage(navigate)}
            >
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <CustomTypography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </CustomTypography>
            </LogoContainer>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* big screen */}
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <CustomButton
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </CustomButton>
              ))}
            </Box>
          </>
  )
}

export default LeftSide
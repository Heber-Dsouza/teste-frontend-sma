import React, {useState} from 'react'
import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom'
import {
  goToLoginPage,
  goToSignupPage
} from "../../../routes/coordinator"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { neutralColor } from '../../../constants/colors';

const CustomAccountCircleIcon = styled(AccountCircleIcon)`
  color: white;
  font-size: 30px;
  color: ${props => props.thecolor === "true" && neutralColor};
`
const CustomTypography = styled(Typography)`
  color: ${props => props.thecolor === "true" && neutralColor};
`

const settings = ['Entrar', 'Cadastrar-se'];

const RightSide = () => {

  const navigate = useNavigate()

  const [changeColor, setChangeColor] = useState("false") //Apenas para mudar cor do ícone e letra onHover

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (page) => {
    setAnchorElUser(null);
    switch (page) {
      case "Entrar":
        goToLoginPage(navigate)
        break
      case "Cadastrar-se":
        goToSignupPage(navigate)
        break
      default:
        goToLoginPage(navigate)
        break
    }
  };

  return (
    
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Abrir opções">
          <IconButton 
            onClick={handleOpenUserMenu} 
            sx={{ p: 0 }} 
            onMouseEnter={() => setChangeColor("true")} 
            onMouseLeave={() => setChangeColor("false")}
          >
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              <CustomAccountCircleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <CustomAccountCircleIcon 
                thecolor={changeColor} 
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} 
              />
              <CustomTypography
                thecolor={changeColor}
                // variant="h6"
                noWrap
                // component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  // fontFamily: 'monospace',
                  // fontWeight: 100,
                  letterSpacing: '.1rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: "15px"
                }}
              >
                SUA CONTA
              </CustomTypography>   
          </IconButton>
        </Tooltip>

        <Menu
          sx={{ mt: '30px', ml: "45px", display: { xs: 'none', md: 'flex' } }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}

          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>

        <Menu
          sx={{ mt: '25px', display: { xs: 'flex', md: 'none' } }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}

          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 18,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}

export default RightSide
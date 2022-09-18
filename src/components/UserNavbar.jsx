import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useUser } from '../context/UserInformationContext';
import Switch from '@mui/material/Switch';


export default function UserNavbar({ setDarkMode, darkMode }) {

    const { userName, avatar } = useUser()
    return (
        <AppBar color={darkMode ? "inherit" : "secondary"} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0, display: "flex", alignItems: "flex-end", marginLeft: "auto" }}>
                        <div style={{ position: "absolute", right: 280, top: 22 }}>
                            {!darkMode && (<img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/sun--v1.png" />)}
                        </div>
                        <MenuItem style={{ margin: "8px", right: "200px", position: "absolute" }}>
                            <Switch style={{ position: "absolute" }} onChange={() => setDarkMode(!darkMode)} checked={darkMode} id='theme-toggle' />
                        </MenuItem>
                        <div style={{ position: "absolute", right: 195, top: 22 }}>
                            {darkMode && (<img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/moon-symbol.png" />)}
                        </div>
                        <MenuItem style={{ alignItems: "center", margin: "15px", pointerEvents: "none", fontSize: "1.5rem" }} key="username" >
                            <Typography textAlign="center">{userName}</Typography>
                        </MenuItem>
                        <Tooltip title={userName}>
                            <Avatar style={{ objectFit: "cover", width: "70px", height: "70px" }} alt="Remy Sharp" src={avatar} />
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )

}
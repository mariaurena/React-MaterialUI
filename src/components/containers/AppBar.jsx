import { AppBar as AppBarMUI, IconButton, Toolbar, Box } from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import TooltipUser from "./TooltipUser"

const AppBar = ({ openDrawer, setOpenDrawer }) => {

    const handleDrawerOpen = () => {
        setOpenDrawer(true)
    }

    const handleDrawerClose = () => {
        setOpenDrawer(false)
    }

    return (
        <AppBarMUI sx = {{ background: '#97c1ee'}}>
            <Toolbar>
                <IconButton onClick = { openDrawer ? handleDrawerClose : handleDrawerOpen }>
                    <MenuIcon sx = {{ fontSize: '25px' }} />
                </IconButton>
                <Box sx = {{ display: 'flex', marginLeft: 'auto' }}>
                    <IconButton>
                        <HelpOutlineIcon sx = {{ fontSize: '30px' }} />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon sx = {{ fontSize: '30px' }} />
                    </IconButton>
                    <TooltipUser />
                </Box>
            </Toolbar>
        </AppBarMUI>
    )
}

export default AppBar
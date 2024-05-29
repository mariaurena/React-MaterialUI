import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Collapse, List as ListMUI, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import SpeedIcon from '@mui/icons-material/Speed' 
import AutoStoriesIcon from '@mui/icons-material/AutoStories' 
import { ExpandLess, ExpandMore } from "@mui/icons-material"

const List = () => {

    const navigate = useNavigate()
    const [openSubmenu, setOpenSubmenu] = useState(false)  

    const handleSubmenu = () => {
        setOpenSubmenu(!openSubmenu)
    }

    const handleOnCatalog = () => {
        navigate('/catalog')
    }

    const handleOnHome = () => {
        navigate('/home')
    }

    return (
        <ListMUI>
            <ListItem disablePadding>
                <ListItemButton onClick = { handleSubmenu }>
                    <ListItemIcon>
                        <SpeedIcon />
                    </ListItemIcon>
                    <ListItemText primary = "General"/>
                    { openSubmenu ? <ExpandLess /> : <ExpandMore /> }
                </ListItemButton>
            </ListItem>
            <Collapse in = { openSubmenu } timeout = "auto" unmountOnExit collapsedSize = '50px'>
                <ListMUI 
                    component = "div" 
                    sx = {{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignContent: 'flex-start', 
                        paddingLeft: '50px'
                    }}>
                    <ListItemButton onClick = { handleOnHome }>
                        <ListItemText primary = "Home" />
                    </ListItemButton>
                </ListMUI>                    
            </Collapse>
            <ListItem disablePadding>
                <ListItemButton onClick = { handleOnCatalog }>
                    <ListItemIcon>
                        <AutoStoriesIcon />
                    </ListItemIcon>
                    <ListItemText primary = "Catálogo"/>
                </ListItemButton>
            </ListItem>
        </ListMUI>
    )
}

export default List
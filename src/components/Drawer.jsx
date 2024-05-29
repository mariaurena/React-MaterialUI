import { Box, Drawer as DrawerMUI } from "@mui/material"

import List from "./List"

const Drawer = ({ openDrawer, setOpenDrawer }) => {

    const handleDrawerClose = () => {
        setOpenDrawer(false)
    }

    return (
        <DrawerMUI open = { openDrawer } onClose = { handleDrawerClose } sx = {{ width: '300px' }} anchor = "left">
            <Box sx = {{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                <img src = '/logotype.png' />
            </Box>
            <List />
        </DrawerMUI>
    )
}

export default Drawer
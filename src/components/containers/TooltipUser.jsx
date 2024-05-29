import { useState } from "react"

import { Box, Button, IconButton, Menu, MenuItem, Select, Tooltip, Typography } from "@mui/material"

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline' 

const TooltipUser = () => {

    // manejamos el menú desplegable del usuario
    const [ anchorUser, setAnchorUser ] = useState(null)
    const openUser = Boolean(anchorUser)

    const handleClickUser = (event) => {
        setAnchorUser(event.currentTarget) 
    }

    const handleCloseUser = () => {
        setAnchorUser(null)
    }

    // manejamos el select del centro
    const [ centro, setCentro ] = useState('Central')
    const handleCentro = (event) => {
        setCentro(event.target.value)
    }

    // manejamos el select del puesto
    const [ puesto, setPuesto ] = useState('Caja mostrador')
    const handlePuesto = (event) => {
        setPuesto(event.target.value)
    }
    
    return (
        <>
            <Tooltip
                onClick={handleClickUser}
                aria-controls={openUser ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openUser ? 'true' : undefined}
                title="Account settings">
                    <Box sx = {{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <IconButton
                        size="small"
                        sx={{ ml: 2 }}
                    >
                        <img src= "/avatar.png" width='40px' height='40px' style = {{ borderRadius: 'inherit '}}/>
                    </IconButton>
                    <Box sx = {{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', marginLeft: '7px'}}>
                        <Typography sx = {{ fontSize: '14px', color: 'black', fontWeight: 'bold'}}>Central</Typography>
                        <Typography sx = {{ fontSize: '14px', color: 'black' }}>Caja mostrador</Typography>
                    </Box>
                    <IconButton>
                        {openUser ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                    </Box>
            </Tooltip>
            <Menu
                anchorEl={anchorUser}
                id="account-menu"
                open={openUser}
                onClose={handleCloseUser}
                onClick={handleCloseUser}
                PaperProps={{
                    sx: {
                    padding: '15px',
                    width: '330px',
                    paddingBottom: 0
                    }
                }}
            >
                <Box sx = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Box sx = {{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx = {{ fontSize: '14px', color: '#344054', fontWeight: 'bold'}}>Pedro Alcántara</Typography>
                    <Typography sx = {{ fontSize: '14px', color: '#344054' }}>pedro@lalibreria.es</Typography>
                    </Box>
                    <Box sx = {{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Button 
                        startIcon= { <DriveFileRenameOutlineIcon/> } 
                        sx = {{ textTransform: 'none', fontSize: '14px', color: '#344054' }}>
                        Editar perfil
                    </Button>
                    </Box>
                </Box>
                <Box sx = {{ display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                    <Typography sx = {{ fontSize: '14px', color: '#344054' }}>Centro</Typography>
                    <Select 
                        name = "Centro"
                        label="Centro"
                        value={centro}
                        onChange={ handleCentro }
                        sx = {{ height: '45px'}}
                    >
                    <MenuItem value = "Central">Central</MenuItem>
                    </Select>
                </Box>
                <Box sx = {{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px'}}>
                    <Typography sx = {{ fontSize: '14px', color: '#344054' }}>Puesto</Typography>
                    <Select 
                        name = "Puesto"
                        label="Puesto"
                        value={puesto}
                        onChange={ handlePuesto }
                        sx = {{ height: '45px'}}
                    >
                    <MenuItem value = "Caja mostrador">Caja mostrador</MenuItem>
                    </Select>
                </Box>
            </Menu>
        </>
        
    )
}

export default TooltipUser
import { useState } from "react"

import AppBar from "./AppBar"
import Drawer from "../Drawer"

const AppBarDrawer = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <AppBar openDrawer = { openDrawer } setOpenDrawer = { setOpenDrawer }/>
            <Drawer openDrawer = { openDrawer } setOpenDrawer = { setOpenDrawer }/>
        </>

    )
}

export default AppBarDrawer
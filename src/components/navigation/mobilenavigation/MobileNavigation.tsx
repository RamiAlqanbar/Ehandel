import './MobileNavigation.css'
import {HamburgerButton} from './hamburgerbutton/HamburgerButton'
import {SideBar} from './sidebar/SideBar'
import { useState } from 'react'
import {BackDrop} from '../../backdrop/BackDrop'
export const MobileNavigation = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(true)

    return (
        <div>
            <HamburgerButton drawerHandler={setOpenDrawer} />
            <SideBar drawerIsopen = {openDrawer} drawerHandler={setOpenDrawer}/>
            {!openDrawer || <BackDrop/>}
        </div>
    )
}

import {DesktopNavigation} from './desktopnavigation/DesktopNavigation'
import {useWindowDimensions} from '../../hooks/useWindowDimensions'
import {useEffect} from 'react'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'

export const Navigation = () => {
    const{width} = useWindowDimensions()

    const navigationviewPort = () => {
        return width <= 1100
        ? <MobileNavigation/>
        : <DesktopNavigation/>
    }
    /*
    useEffect(() => {
        console.log(width,height)
    })
   */
    return (
        <div>
           {navigationviewPort()}
        </div>
    )
}

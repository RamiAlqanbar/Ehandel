import React, {useContext, useEffect} from 'react'
import {UserContext} from '../shared/provider/UserProvider'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import {HomeView} from '../view/HomeView'
import { GalleryView } from '../view/navigationtabviews/GalleryView'
import { NewsView } from '../view/navigationtabviews/NewsView'
import { ShopView } from '../view/navigationtabviews/ShopView'
import { SigninView } from '../view/navigationtabviews/SigninView'
import RoutingPath from './RoutingPath'
import {ProfileView} from '../view/profiledropdownviews/ProfileView'
import {SavedProductsView} from '../view/profiledropdownviews/SavedProductsView'
import {SettingsView} from '../view/profiledropdownviews/SettingsView'




export const Routes = (props: {children?: React.ReactChild} ) => {
    const [authenticatedUser, setAuthernticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated: React.FC) => {
        return authenticatedUser ? HomeView : navigateToViewIfAuthenticated
    
    }

    const authenticatedRquired = (navigateToViewIfAuthenticated: React.FC) =>{
        return authenticatedUser ? navigateToViewIfAuthenticated :SigninView

    }

    const checkIfUserIsAuthenticated = () =>{
        const getlocalStorage = localStorage.getItem('username')
        if(getlocalStorage){
            setAuthernticatedUser(getlocalStorage)

        }
    }
    useEffect(() => {
        checkIfUserIsAuthenticated()
    }
    )
    return (
        <BrowserRouter>
        {props.children}
        <Switch>
            <Route exact path={RoutingPath.galleryView} component={GalleryView}/>
            <Route exact path={RoutingPath.newsView} component={NewsView}/>
            <Route exact path={RoutingPath.shopView} component={ShopView}/>
            <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SigninView)}/>
            <Route exact path={RoutingPath.settingsView} component={authenticatedRquired(SettingsView)}/>
            <Route exact path={RoutingPath.profileView} component={authenticatedRquired(ProfileView)}/>
            <Route exact path={RoutingPath.savedProductsView} component={SavedProductsView}/>
            <Route component={HomeView} />
        </Switch>
            
        </BrowserRouter>
    )
}

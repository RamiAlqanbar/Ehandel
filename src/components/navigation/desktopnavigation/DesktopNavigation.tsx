import './DesktopNavigation.css'
import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import undraw from '../../../shared/images/undraw.svg'
import RoutingPath from '../../../routes/RoutingPath'
import { SigninView } from '../../../view/navigationtabviews/SigninView'
import {Profile} from '../../../components/profile/Profile'

export const DesktopNavigation = () => {
    const [authenticatedUser ,]= useContext(UserContext)
    const history = useHistory()
    /*
    const displayAuthUserOrSignin = () =>{
        if(authenticatedUser){
            return <span>{authenticatedUser}</span>
        }
        else{
            return <span className='signin' onClick={() => history.push(RoutingPath.signInView)}>Signin</span>
        }
    }
    */
    const displayAuthUserOrSignin2 = () =>{
        return authenticatedUser
        ?  <span className='authUserNavigation'><Profile/></span>
        :  <span className='signin' onClick={() => history.push(RoutingPath.signInView)}>Signin</span>

    }
    return (
        <div className='desktopNavigationWrapper'>
            <img className='navlogo' onClick={() => history.push(RoutingPath.homeView)} src={undraw} alt={'Icon'} />
            <span className='shopButton' onClick={() => history.push(RoutingPath.shopView)}>Shop</span>
            <span className='galleryButton' onClick={() => history.push(RoutingPath.galleryView)}>Gallery</span>
            <span className='newsButton' onClick={() => history.push(RoutingPath.newsView)}>News</span>
            {displayAuthUserOrSignin2()}
            
        </div>
    )
}

import {useContext} from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = (): JSX.Element => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    return (
        <div className='profileWrapper'> 
             <span>{authenticatedUser}</span>
        </div>
    )
}

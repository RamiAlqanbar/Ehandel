import {useState, createContext} from 'react'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: {children?: React.ReactChild}) => {
    const [authenticatedUser, setauthenticatedUser] = useState()
    const {children} = props
    return (
        
        <UserContext.Provider value={[authenticatedUser,setauthenticatedUser]}>
            {children}
        </UserContext.Provider>
    )
}
 
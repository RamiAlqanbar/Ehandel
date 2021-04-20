import {useState, useContext} from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SigninView = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [username, setUsername] = useState<string>('')
    /*
    const [username, setUsername] = useState<String>('Rami')
    const [password, setPassword] = useState<String>('')

    const saveDatatoBrowser= () =>{
        localStorage.setItem('username','Rami')
    }

    const removeData = ()=>{
        localStorage.removeItem('username')
    }
    */
   const signIn = ()=>{
       setAuthenticatedUser(username)
       localStorage.setItem('username',username)
       history.push(RoutingPath.homeView)

   }
    return (
        
        <div>
            <br/>   
            <span >username:</span><input onChange={event =>setUsername(event.target.value)}/> <br/>
            <button onClick={()=> signIn()}>Sign in</button>
           
            </div>
        
    )
}

/*
this is for up
 <h1>{username}</h1>
            <h1>{password}</h1>  
             <span>password:</span><input onChange={event =>setPassword(event.target.value)}/>
            <button onClick={() =>saveDatatoBrowser()}>SaveData</button>
            <button onClick={() =>removeData()}>RemoveData</button>
            ---------------------------------
export const SigninView = () => {
    const [username, setUsername] = useState<String>('Rami')
    const [loading, setLoading] = useState<boolean>(false)

    const displayData = () => {
        if(loading){
            return(
                <div>
                <h1>{username}</h1>
                <button onClick={()=> setUsername('Alqanbar')}>Update Value</button>
            </div>
            
      
             )
         }
    }

    return (
        
        <div>
            <h1 onClick={()=> setLoading(!loading)}>Show The data</h1>
            {displayData()}
            
            </div>
        
    )
    }

    */
import {Routes} from './routes/Routes'
import {Navigation} from './components/navigation/Navigation'
import {UserProvider} from './shared/provider/UserProvider'
import './shared/global/Global.css'
import { formatDiagnostic } from 'typescript'
export const App = () => {
  return (
    <UserProvider>
    <Routes>
      <Navigation/>
    </Routes>
    </UserProvider>
    )
}



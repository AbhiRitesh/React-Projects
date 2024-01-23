
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>My name is Abhishek and I am a web developer</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

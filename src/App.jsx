import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import MyRoute from './MyRoute'
import Header from './component/Layout/Header'
function App() {

  return (
    <UserContextProvider>
    <Header />
    <MyRoute />
    </UserContextProvider>
  )
}

export default App

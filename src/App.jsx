import './styles/reset.css'
import './styles/App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ShopsPage from "./pages/ShopsPage"
import AddShopPage from "./pages/AddShopPage"
import Header from "./components/layout/Header"
import Notice from './components/ui/notice/Notice'
import { useAuthCtx } from './store/AuthProvider'
import Footer from './components/layout/Footer'


function App() {

  const {isLoggedIn} = useAuthCtx()

  return (
    <div className='font-inter' >
      <Header />
      <Notice  />
    <Routes>
<Route path="/" element={ isLoggedIn ? <Navigate to={'/shops'}/> : <LoginPage/>} />
<Route path="/register" element={isLoggedIn ? <Navigate to={'/shops'}/> : <RegisterPage />} />
<Route path="/shops" element={isLoggedIn ? <ShopsPage /> : <Navigate to={'/'} /> } />
<Route path="/add" element={isLoggedIn ? <AddShopPage /> : <Navigate to={'/'} />} />
  </Routes>
  <Footer/>
    </div>
  )
}

export default App
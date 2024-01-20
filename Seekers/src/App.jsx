import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './Pages/AuthPage/AuthPage'
import HomePage from './Pages/HomePage/HomePage'
import Layout from './Layouts/PageLayout/Layout'

function App() {

  return (
    <>
    <Layout>
    	<Routes>
				<Route path='/' element={<AuthPage/>} />
        <Route path='/home' element={<HomePage/>}/>
			</Routes>
    </Layout>
    </>
  )
}

export default App

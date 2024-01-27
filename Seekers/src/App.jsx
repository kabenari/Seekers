import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import Layout from './Layouts/PageLayout/Layout'
import Login from './Components/Login/Login'
import UpdateUSer from './Components/UpdateUser/UpdateUSer'

function App() {

  return (
    <>
    <Layout>
    	<Routes>
				<Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/update-user/:id' element={<UpdateUSer/>} loader={({params})=>fetch(`http://localhost:3000/users/${params.id}`)}/>
			</Routes>
    </Layout>
    </>
  )
}

export default App

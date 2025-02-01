import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import CreateEvent from './Pages/CreateEvent'
import BookEvent from './Pages/BookEvent'
import ContactUs from './Pages/ContactUs'
import Feedback from './Pages/FeedBack'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'

const App = () => {
  return (
    
    <div>
     
      <Router>
        <NavBar/>
         <Routes>
         
          <Route path='/' element={<Homepage/>} />
          <Route path='create-event' element={<CreateEvent/>}/>
          <Route path='book-event' element={<BookEvent/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='feedback' element={<Feedback/>}/>
          <Route path='login-signup' element={<Login/>}/>
          <Route path='*' element={<PageNotFound/>}/>

        </Routes>
      </Router>


    </div>
  )
}

export default App
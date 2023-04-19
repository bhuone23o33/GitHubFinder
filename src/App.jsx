import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import { FinderProvider } from './context/GithubContext/ContextData'
import { AlertProvider } from './context/AlertContext/AlertContext'
import Alert from './components/layout/Alert'
import User from './components/pages/User'
import Footer from './components/layout/Footer'


function App() {
  return (
    <FinderProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between text-white h-screen">
            <Navbar/>
              <main className = "container mx-auto px-3 pb-12">
                
                <Alert/>
                <Routes>
                  <Route path = "/" element = {<Home/>} />
                  <Route path = "/about" element = {<About/>} />
                  <Route path = "/user/:login" element = {<User/>} />
                  <Route path = "/notfound" element = {<NotFound/>} />
                  <Route path = "/*" element = {<NotFound/>} />
                </Routes>
              </main>

            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </FinderProvider>
  )
}

export default App


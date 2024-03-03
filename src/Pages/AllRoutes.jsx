import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
function AllRoutes() {
    return (
        <main>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/about' Component={About} />
                <Route path='/login' Component={Login} />
                <Route path='/signup' Component={Signup} />
            </Routes>
        </main>
    )
}

export default AllRoutes
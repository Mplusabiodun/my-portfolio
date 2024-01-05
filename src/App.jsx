import React, {useState, useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, NavLink, useNavigate} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import Fallback from './Fallback'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Loading from './pages/Loading'
import PageError from './pages/PageError'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import {RepoDetails} from './pages/RepoDetails'

export default function App () {


  const errorHandler = (error, errorInfo) => {
    console.log('Logging', error, errorInfo);
  }

  return( 
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
            <Route path="/Profile/:details" element={<RepoDetails />} />
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="*" element={<PageError/>} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
};








          
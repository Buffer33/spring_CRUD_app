import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/home/Home';
import Course from './components/course/Course';
import AllCourses from './components/allcourses/AllCourses';
import AddCourse from './components/addcourse/AddCourse';
import Header from './components/header/Header';
import Manu from './components/manu/Manu';
import Update from './components/update/Update';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'


function App() {
 const notify =()=>toast("this is alert");

  return (
    <>
     
      <Router>
      <ToastContainer />
      <Container>
      <Header/>
    <Row>
      <Col md="4">
      <Manu/>
      </Col>
      <Col md="8">
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/add-courses' Component={AddCourse}/>
      <Route path='/view-courses' Component={AllCourses}/>
      <Route path='/update' Component={Update}/>
      </Routes>
      </Col>
    </Row>
      </Container>
      </Router>
    </>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

function Manu() {
  return (
    <div>
      <ListGroup>
        <Link tag="a" className='list-group-item list-goup-item-action' to='/'>Home</Link>
        <Link tag="a" className='list-group-item list-goup-item-action' to='/add-courses'>Add Courses</Link>
        <Link tag="a" className='list-group-item list-goup-item-action' to='/view-courses'>View Courses</Link>
        <Link tag="a" className='list-group-item list-goup-item-action' to='/about'>About</Link>
        <Link tag="a" className='list-group-item list-goup-item-action' to='/contact'>Contact</Link>
      </ListGroup>
    </div>
  )
}

export default Manu

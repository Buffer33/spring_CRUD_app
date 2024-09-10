import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
function Home() {
    useEffect(()=>{
        document.title="Home || learn coding"
    },[])
  return (
    <div>
      <div className='w-100 rounded p-5 bg-dark-subtle text-center'>
        <h1>Lean Programming With Me</h1>
        <p>This is Courses Application  which is developed by me in this for backend i have used spring boot and for front end i have used ract js</p>
        <Link to="/view-courses"><Button color='primary' outline>Start using</Button></Link>
        </div>
    </div>
  )
}

export default Home

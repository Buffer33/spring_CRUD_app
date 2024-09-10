import React, { useEffect, useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios';
import baseUrl from '../api/BootApi';
import { toast } from 'react-toastify';
function AddCourse() {
    const [course, setCourse]=useState({});
    const formHandler=(e)=>{
        console.log(course);
         e.preventDefault();
         addDatatoserver(course);
         
        }
    useEffect(()=>{
document.title="Add Courses || Learn coding"

    },[])

    const addDatatoserver=(data)=>{
        axios.post(baseUrl,data).then(
            (response)=>{
            console.log(response);
            console.log("successfully updated")
            toast.success("course added successfully")
            handleClear();
        },(error)=>{
            console.log(error);
            console.log("something went wrong")
            toast.error("something went wrong!")
        }
    )

    }
    const handleClear = () => {
        setCourse({});  // Reset the state to clear the input fields
    };

    
  return (
    <div>
        <h1 className='text-center my-4'>Fill Course Detail</h1>
      <Form onSubmit={formHandler}>
        <FormGroup>
            <Label for="courseId">Course Id</Label>
            <Input type='text' value={course.id || ''} id='courseId' placeholder='Enter Course Id' name='courseId' onChange={(e)=>{setCourse({...course,id:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <Label for='title'>Course Title</Label>
            <Input type='text' value={course.title || ''}  id='title' placeholder='Enter course title here' onChange={(e)=>{setCourse({...course,title:e.target.value})}}/>
        <FormGroup>
            <Label for="description">Course Description</Label>
            <Input type='textarea' value={course.description || ''}  id='description' placeholder='Enter course description here' style={{height:150}}
            onChange={(e)=>{setCourse({...course, description:e.target.value})}}
            />
        </FormGroup>
            <Label></Label>
        </FormGroup>
        <Container className='text-center'>
        <Button type='submit' color='success mx-3'>Add</Button>
        <Button type='reset' color='danger'>Clear</Button>
        </Container>
      </Form>
    </div>
  )
}

export default AddCourse

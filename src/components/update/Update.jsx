import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { useLocation } from 'react-router-dom';

const Update = () => {
    const location = useLocation();
    const [course, setCourse] = useState(location.state?.course || {});

    useEffect(() => {
        document.title = "Update Course || Learn coding";
    }, []);

    const formHandler = (e) => {
        e.preventDefault();
        // Add your update logic here
    };

    return (
        <div>
            <h1 className='text-center my-4'>Update Course Detail</h1>
            <Form onSubmit={formHandler}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input
                        type='text'
                        value={course.id || ''}
                        id='courseId'
                        placeholder='Enter Course Id'
                        name='courseId'
                        readOnly // Usually course ID is not editable
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='title'>Course Title</Label>
                    <Input
                        type='text'
                        value={course.title || ''}
                        id='title'
                        placeholder='Enter course title here'
                        onChange={(e) => setCourse({ ...course, title: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input
                        type='textarea'
                        value={course.description || ''}
                        id='description'
                        placeholder='Enter course description here'
                        style={{ height: 150 }}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </FormGroup>
                <Container className='text-center'>
                    <Button type='submit' color='success mx-3'>Update</Button>
                    <Button type='reset' color='danger' onClick={() => setCourse({})}>Clear</Button>
                </Container>
            </Form>
        </div>
    );
};

export default Update;

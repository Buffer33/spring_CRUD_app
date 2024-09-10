import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from 'reactstrap';
import axios from 'axios';
import baseUrl from '../api/BootApi';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

const Course = ({ course, update }) => {
    const navigate = useNavigate();

    const deleteHandler = (id) => {
        axios.delete(`${baseUrl}/${id}`).then((response) => {
            toast.success("Course deleted successfully");
            update(id);
        }, (error) => {
            toast.error("Something went wrong!");
        });
    };

    const handleEdit = () => {
        navigate("/update", { state: { course } }); // Passing course data via state
    };

    return (
        <div>
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container>
                        <Button
                            onClick={() => {
                                deleteHandler(course.id);
                            }}
                            color="danger"
                        >
                            DELETE
                        </Button>
                        <Button
                            onClick={handleEdit}
                            color="warning mx-3"
                        >
                            EDIT
                        </Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};

export default Course;

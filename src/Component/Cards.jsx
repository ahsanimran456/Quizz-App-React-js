import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Screens/screen.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ({title,subjects,StartQuizz}) => {
    return (
        <Card className='cards'>
          <Card.Header as="h5">{title}</Card.Header>
          <Card.Body>
            <Card.Title> Subjects : {subjects}</Card.Title>
            <Button variant="primary"onClick={StartQuizz}>Start Quizz</Button>
          </Card.Body>
        </Card>
      );
;}

export default Cards;
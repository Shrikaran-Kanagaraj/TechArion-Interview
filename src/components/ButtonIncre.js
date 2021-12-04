import React, {useState} from 'react';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';


export default function ButtonIncre(){
    // const initialCount = 0;
    const [count,setCount] = useState(0)

    console.log(count);
    return(
        <div className="p-4">

        <Container>
        <Row>
        <Col md={{ span: 3, offset: 3 }}>
        <Card>
              <Card.Body>
            <Card.Title>Increment by 3</Card.Title>
            <Card.Text>
                <p>Count : {count}</p>
                
            </Card.Text>
            <Button onClick={() => setCount(count + 3)}>
            Click Here </Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>          
            
        </div>

    );
} 
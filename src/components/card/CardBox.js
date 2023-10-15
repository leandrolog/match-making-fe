import {Button} from "react-bootstrap";
import React from "react";
import {Card} from 'react-bootstrap';


const CardBox = () => {
    return(
        <div>
            <Card style={{ width: '18rem', marginLeft: '2rem', marginTop: '2rem', border: '4px bold '}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardBox;

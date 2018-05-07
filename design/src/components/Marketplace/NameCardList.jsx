import React from 'react';
import NameCard from './NameCard'
import { Card, Container } from "semantic-ui-react";

export default function NameCardList (){
    return (
        <Card.Group itemsPerRow={4}>
            <NameCard 
                name="Name"
                owner="Me"
                likes={17}
                src="https://dummyimage.com/mediumrectangle/222222/eeeeee"
                price={1.121}
            />
        </Card.Group>
    )
}

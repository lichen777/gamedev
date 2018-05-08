import React from 'react';
import NameCard from './NameCard'
import { Card } from "semantic-ui-react";

export default function NameCardList ({ source }){
    return (
        <Card.Group itemsPerRow={4}>
            <NameCard 
                name="Name"
                owner="Me"
                description="..."
                likes={17}
                id={1}
                src="https://dummyimage.com/mediumrectangle/222222/eeeeee"
                price={1.121}
            />
            {source.map(item => <NameCard {...item} />)}
        </Card.Group>
    )
}

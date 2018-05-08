import React from "react";
import { Card, Image, Grid, Icon, Button } from "semantic-ui-react";
import "./NameCard.css";

export default function NameCard({
  id,
  name,
  src,
  likes,
  owner,
  price,
  description
}) {
  return (
    <Card key={id}>
      <Image src={src} />
      <Card.Content textAlign="left">
        <Card.Header>
          <Grid>
            <Grid.Column floated="left" width={7}>
              {name}
            </Grid.Column>
            <Grid.Column floated="right" textAlign="right" width={9}>
              <Icon name="heart outline" size="small" />
              <span className="likes">{likes} likes </span>
              <Icon name="mail forward" size="small" />
            </Grid.Column>
          </Grid>
        </Card.Header>
        <Card.Meta textAlign="left">
          <span>
            Owned by <a>{owner}</a>
          </span>
        </Card.Meta>
        <Card.Description textAlign="left">{description}</Card.Description>
      </Card.Content>
      <Card.Content textAlign="left" extra>
        <Card.Header>
          <Grid>
            <Grid.Column className="price" floated="left" width={9}>
              {price} ETH
            </Grid.Column>
            <Grid.Column floated="right" width={7}>
              <Button floated="right" secondary className="cardButton">
                Buy
              </Button>
            </Grid.Column>
          </Grid>
        </Card.Header>
      </Card.Content>
    </Card>
  );
}

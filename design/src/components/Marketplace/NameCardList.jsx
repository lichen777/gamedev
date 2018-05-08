import React from "react";
import PropTypes from 'prop-types';
import NameCard from "./NameCard";
import { Card } from "semantic-ui-react";

const ITEMSPERROW = 4;

export default function NameCardList({ source }) {
  return (
    <Card.Group itemsPerRow={ITEMSPERROW}>
      <NameCard
        name="Name"
        owner="Me"
        description="..."
        likes={17}
        id={1}
        src="https://dummyimage.com/mediumrectangle/222222/eeeeee"
        price={1.121}
      />
      {source.length !== 0 ? source.map(item => <NameCard {...item} />) : "" }
    </Card.Group>
  );
}

NameCardList.propTypes = {
  source: PropTypes.array
};
NameCardList.defaultProps = {
  source: []
};

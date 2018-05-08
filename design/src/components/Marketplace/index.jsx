import React from "react";
import NameCardList from "./NameCardList";
import MarketplaceMenu from "./MarketplaceMenu";
import { Container, Header, Divider, Pagination } from "semantic-ui-react";

import _ from "lodash";
import faker from "faker";

const source = _.times(100, () => ({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
  owner: faker.name.lastName(),
  description: faker.company.catchPhrase(),
  src: faker.internet.avatar(),
  likes: faker.random.number(),
  price: faker.finance.amount(0, 100, 2)
}));

export default class Marketplace extends React.Component {
  state = {
    activeItem: "all",
    activeView: "grid",
    sortedView: 0
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleViewClick = (e, { name }) => this.setState({ activeView: name });

  handleSortClick = (e, { name }) => this.setState({ sortedView: name });

  render() {
    return (
      <div>
        <Container textAlign="center">
          <Header as="h1" content="Marketplace" />
        </Container>
        <Divider hidden />
        <Container>
          <MarketplaceMenu
            {...this.state}
            handleItemClick={this.handleItemClick}
            handleViewClick={this.handleViewClick}
            handleSortClick={this.handleSortClick}
          />
          <NameCardList source={source} />
          <Divider hidden />
          <Pagination activePage={7} totalPages={20} />
        </Container>
      </div>
    );
  }
}

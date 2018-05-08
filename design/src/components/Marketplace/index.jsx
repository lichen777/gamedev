import React from "react";
import NameCardList from "./NameCardList";
import MarketplaceMenu from "./MarketplaceMenu";
import { Container, Header, Divider, Pagination, Rail, Menu, Grid } from "semantic-ui-react";

import _ from "lodash";
import faker from "faker";

const ITEMPERPAGE = 40;

const source = _.times(1000, i => ({
  key: i,
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
    sortedView: 0,
    activePage: 1
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleViewClick = (e, { name }) => this.setState({ activeView: name });

  handleSortClick = (e, { name }) => this.setState({ sortedView: name });

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  render() {
    const { activePage } = this.state;

    const totalPages = Math.ceil(source.length / ITEMPERPAGE);

    const display = source.filter((item, index) => {
      return (
        index >= (activePage - 1) * ITEMPERPAGE &&
        index < activePage * ITEMPERPAGE
      );
    });

    return (
      <div className="marketplace">
        <Container textAlign="center">
          <Header as="h1" content="Marketplace" />
        </Container>
        <Divider hidden />
        <Container>
          <Grid centered columns={3}>
            <Grid.Column width={1} >
              <Menu compact vertical>
                <Menu.Item name='A' />
              </Menu>
            </Grid.Column>
            <Grid.Column textAlign="center" width={14} >
              <MarketplaceMenu
                {...this.state}
                handleItemClick={this.handleItemClick}
                handleViewClick={this.handleViewClick}
                handleSortClick={this.handleSortClick}
              />
              <Container>
                <NameCardList source={display} />
              </Container>
              <Divider hidden />
              <Pagination
                activePage={activePage}
                totalPages={totalPages}
                onPageChange={this.handlePaginationChange}
              />
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid>
        </Container>
      </div>
    );
  }
}

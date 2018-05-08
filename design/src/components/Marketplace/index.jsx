import React from "react";
import NameCardList from "./NameCardList";
import { Container, Header, Divider, Menu, Input, Icon, Dropdown, Pagination } from "semantic-ui-react";

import _ from "lodash";
import faker from "faker";

const source = _.times(100, () => ({
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    owner: faker.name.lastName(),
    description: faker.company.catchPhrase(),
    src: faker.internet.avatar(),
    likes: faker.random.number(),
    price: faker.finance.amount(0, 100, 2),
}))

const options = ["Price (High - Low)", "Price (Low - High)", "Likes (High - Low)", "Likes (Low - High)"]

export default class Marketplace extends React.Component {
    state = {
      activeItem: 'all',
      activeView: 'grid',
      sortedView: 0
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleViewClick = (e, { name }) => this.setState({ activeView: name })

    handleSortClick = (e, { name }) => this.setState({ sortedView: name })

    render() {
        const { activeItem, activeView, sortedView } = this.state;

        return (
            <div>
                <Container textAlign="center">
                    <Header as='h1' content="Marketplace" />
                </Container>
                <Divider hidden />
                <Container>
                    <Menu pointing secondary>
                        <Menu.Item name='all' active={activeItem === 'all'} onClick={this.handleItemClick} />
                        <Menu.Item name='male' active={activeItem === 'male'} onClick={this.handleItemClick} />
                        <Menu.Item name='female' active={activeItem === 'female'} onClick={this.handleItemClick} />
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' size='small' iconPosition='left' placeholder='Find a Name' />
                            </Menu.Item>
                            <Dropdown item text={options[sortedView]}>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={this.handleSortClick} selected={sortedView === 0} name={0}>{options[0]}</Dropdown.Item>
                                    <Dropdown.Item onClick={this.handleSortClick} selected={sortedView === 1} name={1}>{options[1]}</Dropdown.Item>
                                    <Dropdown.Item onClick={this.handleSortClick} selected={sortedView === 2} name={2}>{options[2]}</Dropdown.Item>
                                    <Dropdown.Item onClick={this.handleSortClick} selected={sortedView === 3} name={3}>{options[3]}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item name='grid' onClick={this.handleViewClick}>
                                <Icon name='grid layout' color={activeView === 'grid' ? 'purple' : 'grey'} />
                            </Menu.Item>
                            <Menu.Item name='list' onClick={this.handleViewClick}>
                                <Icon name='list layout' color={activeView === 'list' ? 'purple' : 'grey'} />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <NameCardList source={source} />
                    <Divider hidden />
                    <Pagination activePage={7} totalPages={20} />
                </Container>
            </div>
        )
    }
}

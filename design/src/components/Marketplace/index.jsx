import React from "react";
import NameCardList from "./NameCardList";
import { Container, Header, Divider, Menu, Input, Icon } from "semantic-ui-react";

export default class Marketplace extends React.Component {
    state = {
      activeItem: 'all',
      activeView: 'grid'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleViewClick = (e, { name }) => this.setState({ activeView: name })

    render() {
        const { activeItem, activeView } = this.state;

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
                            <Menu.Item name='grid' onClick={this.handleViewClick}>
                                <Icon name='grid layout' color={activeView === 'grid' ? 'purple' : 'grey'} />
                            </Menu.Item>
                            <Menu.Item name='list' onClick={this.handleViewClick}>
                                <Icon name='list layout' color={activeView === 'list' ? 'purple' : 'grey'} />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <NameCardList />
                </Container>
            </div>
        )
    }
}

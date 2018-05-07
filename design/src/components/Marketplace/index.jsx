import React from "react";
import NameCardList from "./NameCardList";
import { Container, Header, Divider, Menu, Input } from "semantic-ui-react";

export default class Marketplace extends React.Component {
    state = { activeItem: 'all' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

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
                                <Input icon='search' placeholder='Find a Name' />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <NameCardList />
                </Container>
            </div>
        )
    }
}

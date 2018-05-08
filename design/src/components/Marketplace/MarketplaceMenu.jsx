import React from "react";
import PropTypes from 'prop-types';
import { Menu, Input, Icon, Dropdown } from "semantic-ui-react";

const options = ["Price (High - Low)", "Price (Low - High)"];

const status = ["all", "buyable"];

export default function MarketplaceMenu({
  activeItem,
  activeView,
  statusView,
  sortedView,
  handleItemClick,
  handleSortClick,
  handleStatusClick,
  handleViewClick
}) {
  return (
    <Menu pointing secondary>
      <Menu.Item
        name="all"
        active={activeItem === "all"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="male"
        active={activeItem === "male"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="female"
        active={activeItem === "female"}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            icon="search"
            size="small"
            iconPosition="left"
            placeholder="Find a Name"
          />
        </Menu.Item>
        <Dropdown item text="Status">
          <Dropdown.Menu>
            {status.map((item, index) => {
              return (
                <Dropdown.Item
                  onClick={handleStatusClick}
                  selected={statusView === index}
                  name={index}
                >
                  {item}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text={options[sortedView]}>
          <Dropdown.Menu>
            {options.map((item, index) => {
              return (
                <Dropdown.Item
                  onClick={handleSortClick}
                  selected={sortedView === index}
                  name={index}
                >
                  {item}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name="grid" onClick={handleViewClick}>
          <Icon
            name="grid layout"
            color={activeView === "grid" ? "purple" : "grey"}
          />
        </Menu.Item>
        <Menu.Item name="list" onClick={handleViewClick}>
          <Icon
            name="list layout"
            color={activeView === "list" ? "purple" : "grey"}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

MarketplaceMenu.propTypes = {
  activeItem: PropTypes.string,
  activeView: PropTypes.string,
  statusView: PropTypes.number,
  sortedView: PropTypes.number,
  handleItemClick: PropTypes.func,
  handleSortClick: PropTypes.func,
  handleStatusClick: PropTypes.func,
  handleViewClick: PropTypes.func
};
MarketplaceMenu.defaultProps = {
  activeItem: "all",
  activeView: "grid",
  sortedView: 0
};

import React from "react";
import { Menu, Input, Icon, Dropdown } from "semantic-ui-react";

const options = [
  "Price (High - Low)",
  "Price (Low - High)",
  "Likes (High - Low)",
  "Likes (Low - High)"
];

export default function MarketplaceMenu({
  activeItem,
  activeView,
  sortedView,
  handleItemClick,
  handleSortClick,
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
        <Dropdown item text={options[sortedView]}>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={handleSortClick}
              selected={sortedView === 0}
              name={0}
            >
              {options[0]}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleSortClick}
              selected={sortedView === 1}
              name={1}
            >
              {options[1]}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleSortClick}
              selected={sortedView === 2}
              name={2}
            >
              {options[2]}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleSortClick}
              selected={sortedView === 3}
              name={3}
            >
              {options[3]}
            </Dropdown.Item>
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

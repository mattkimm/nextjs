import React from "react";
import { Menu } from "semantic-ui-react";

function Gnb() {
  const activeItem = "home";
  return (
    <Menu>
      <Menu.Item
        name="editorials"
        active={activeItem === "editorials"}
        //onClick={this.handleItemClick}
      >
        Editorials
      </Menu.Item>

      <Menu.Item
        name="reviews"
        active={activeItem === "reviews"}
        //onClick={this.handleItemClick}
      >
        Reviews
      </Menu.Item>

      <Menu.Item
        name="upcomingEvents"
        active={activeItem === "upcomingEvents"}
        //onClick={this.handleItemClick}
      >
        Upcoming Events
      </Menu.Item>
    </Menu>
  );
}

export default Gnb;

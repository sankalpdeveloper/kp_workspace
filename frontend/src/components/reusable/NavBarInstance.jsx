import React from "react";
import { Navbar, Nav, Dropdown } from "rsuite";
import { Link } from "react-router-dom";
import "./css/NavBarInstance.css";

import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineShop,
  AiOutlineTeam,
  AiOutlineContacts,
  AiOutlineInfoCircle,
} from "react-icons/ai";

// import default style
import "rsuite/dist/rsuite.min.css";

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Brand href="#">Krishan Disposable</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1" icon={<AiOutlineHome />}>
          <Link to="/">Home</Link>
        </Nav.Item>

        <Nav.Item eventKey="2" icon={<AiOutlineShop />}>
          <Link to="/products">Products</Link>
        </Nav.Item>

        <Dropdown title="About" icon={<AiOutlineInfoCircle />}>
          <Link to="/shop">
            <Dropdown.Item eventKey="4" icon={<AiOutlineShop />}>
              Shop
            </Dropdown.Item>
          </Link>
          <Link to="/team">
            <Dropdown.Item eventKey="5" icon={<AiOutlineTeam />}>
              Team
            </Dropdown.Item>
          </Link>
          <Link to="/contact">
            <Dropdown.Item eventKey="6" icon={<AiOutlineContacts />}>
              Contact
            </Dropdown.Item>
          </Link>
        </Dropdown>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<AiOutlineShoppingCart />}>Cart</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBarInstance;

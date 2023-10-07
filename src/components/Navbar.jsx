import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "#d1e3ff", padding: "10px 0" }}>
      <NavBar>
        <Link to="/" style={{
          color: "#0355cc",
          textTransform: "uppercase",
          fontSize: "24px",
          fontWeight: "bold"
        }}>
          INANCE
        </Link>
        <LinkPosition>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="about">About</StyledLink>
          <StyledLink to="services">Services</StyledLink>
          <StyledLink to="contact-us">Contact Us</StyledLink>
        </LinkPosition>
      </NavBar>
    </div>
  )
}

export default Navbar

const NavBar = styled.nav`
   padding-left: 25px;
   padding-right: 25px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LinkPosition = styled.div`
    text-decoration: none;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

const StyledLink = styled(Link)`
    padding: 10px 25px;
    color: #000000;
    text-align: center;
    font-size: 20px;
    &:hover,
    &:active{
      color: #007bff;
    }
`;
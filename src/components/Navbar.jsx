import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();

  const handleMenuToggle = async () => {
    await controls.start({ rotate: open ? 0 : 360 });
    setOpen(!open);
  }

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
        <Icons onClick={handleMenuToggle}>
          <motion.div
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </motion.div>
        </Icons>
      </NavBar>
      <LinkResponsiveMenu open={open}>
        <StyledLink to="/" >Home</StyledLink>
        <StyledLink to="about">About</StyledLink>
        <StyledLink to="services">Services</StyledLink>
        <StyledLink to="contact-us">Contact Us</StyledLink>
      </LinkResponsiveMenu>
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
`;

const LinkPosition = styled.div`
    text-decoration: none;
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
`;

const LinkResponsiveMenu = styled.div`
    display: none;
    @media (max-width: 768px) {
      display: ${(props) => (props.open ? 'flex' : 'none')};
      flex-direction: column;
    }
`;

const Icons = styled.div`
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
`;

const StyledLink = styled(Link)`
    padding: 10px 25px;
    color: #000000;
    text-align: center;
    font-size: 20px;
    &:hover{
      color: #007bff;
    };
    &:active{
      color: ${(props) => (props.clicked ? '#007bff' : '#000000')};
    }
`;
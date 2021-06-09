import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BiMenu, BiX, BsCloudDownload } from 'react-icons/bi';
import { Button } from '../../styles/GlobalStyle';
import { useAuth } from '../../context/auth';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from './Navbar.styles';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    /*
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
    */
    setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  const { authTokens, setAuthTokens } = useAuth();

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              F4CLOUD
            </NavLogo>
            <MenuIcon onClick={handleClick}>{click ? <BiX /> : <BiMenu />}</MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/about">
                  About
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/service">
                  Services
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/contact">
                  Contact
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/drive">
                  Drive
                </MenuLink>
              </MenuItem>
              <MenuItemBtn>
                {
                  authTokens ? (
                    <MenuLinkBtn onClick={() => setAuthTokens(null)}>
                      <Button primary>Logout</Button>
                    </MenuLinkBtn>
                  ) : (
                    <MenuLinkBtn to="/login">
                      <Button primary>Login</Button>
                    </MenuLinkBtn>
                  )
                  // : (
                  //   <MenuLinkBtn to="/login">
                  //     <Button primary bigFont onClick={closeMenu}>
                  //       Login
                  //     </Button>
                  //   </MenuLinkBtn>
                  // )
                }
              </MenuItemBtn>
              <MenuItemBtn>
                {button ? (
                  <MenuLinkBtn to="/register">
                    <Button primary>Register</Button>
                  </MenuLinkBtn>
                ) : (
                  <MenuLinkBtn to="/register">
                    <Button primary bigFont onClick={closeMenu}>
                      Register
                    </Button>
                  </MenuLinkBtn>
                )}
              </MenuItemBtn>
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;

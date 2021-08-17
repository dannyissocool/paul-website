import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${props => props.dark ? 'black' : 'white'};
  border-bottom: 1px solid ${props => props.dark ? 'white' : 'black'};
  font-family: 'Poppins';
  z-index: 1;
  transition: 0.3s all ease;
`
const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
`

const Logo = styled.a`
  color: ${props => props.dark ? 'white' : 'black'};
  padding: 14px 20px;
  font-weight: bold; 
  text-decoration: none;
  font-size: larger;
  transition: 0.2s all ease;

  :hover {
    color: ${props => props.dark ? 'black' : 'white'};
    background-color: ${props => props.dark ? 'white' : 'black'};
  }
`

const DarkButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 15px;
  font-family: Poppins;
  width: auto;
  color: ${props => props.dark ? 'black' : 'white'};
  background-color: ${props => props.dark ? 'white' : 'black'};
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const MenuButton = styled(AiOutlineMenu)` 
  cursor: pointer;
  padding: 10px;
  font-size: larger;
  display:none;
  position:absolute;
  left: 50%;
  transform:translateX(-50%);
  color:${props => props.dark ? 'white' : 'black'};

  @media(max-width: 768px) {
    display:block;
  }
`

const NavLinks = styled.ul`
  display:flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 10px;

  @media(max-width:768px) {
    display: ${props => props.mobile ? 'block' : 'none'};    
    width: 100%;
    text-align: center;
    background-color: ${props => props.dark ? 'black' : 'white'};    
    padding: 0;
    transform: translateY(70%)
  }
`

const NavLink = styled.li`
  color:${props => props.dark ? 'white' : 'black'};  
  text-decoration: none;
  font-weight: normal;
  display: block;
  padding: 16px 20px;
  transition: 0.2s all ease;

  :hover {
    color: ${props => props.dark ? 'black' : 'white'};
    background-color: ${props => props.dark ? 'white' : 'black'};
  }

  @media(max-width:768px) {
    border: 1px solid ${props => props.dark ? 'white' : 'black'};
    margin: 1px 0;
  }
`

const Navbar = ({dark, setDark}) => {
  const [mobile, setMobile] = useState(false)

  

  return (
    <Nav dark={dark}>
      <Wrapper>       
        <Logo as={Link} to='/' dark={dark} href="#">PCM</Logo>

        <MenuButton dark={dark} onClick={() => setMobile(!mobile)} />       
        <NavLinks mobile={mobile} dark={dark}>
          <NavLink as={Link} to='/' dark={dark} href="#">
            Home
          </NavLink>
          <NavLink as={Link} to='/gallery' dark={dark}  href="#">
            Gallery
          </NavLink>
          <NavLink as={Link} to='/contact' dark={dark} href="#">
            Contact
          </NavLink>
        </NavLinks> 
        <DarkButton dark={dark} onClick={setDark}>{dark ? 'Light' : 'Dark'}</DarkButton>
       </Wrapper>
    </Nav>
  )
}

export default Navbar

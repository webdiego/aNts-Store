import Logo from '../img/Logo aNTS.png'
import{ Link} from 'react-router-dom'
import styled from 'styled-components'
import {LogoStyle} from '../Style/Style'


const Nav = () => {
  return (
    <Container >
      <div className="logo">
       <Link to="/">
      <LogoStyle  src={Logo} alt=""/>
       </Link>
      </div>

      <NavList>
      <ul>
        <li>MUSIC</li>
        <li>CLOTHES</li>
        <li>GADGETS</li>
      </ul>
      </NavList>
    </Container>
  )
}

export default Nav

const Container = styled.div`
width:100%;
height:6rem;
display:flex;
color:white;
background-color:black;
`
const NavList  = styled.div`
 display:flex;
 width:100%;

 justify-content:center;
 align-items:center;
 ul{
display:flex;
  li{
margin:0 2rem;
list-style:none;

  }
 }
`

//Img
import Logo from '../../img/Logo aNTS.png'
//Style
import {LogoStyle} from '../../Style/Style'
import{ Link} from 'react-router-dom'
//Styled Components
import styled from 'styled-components'


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
        <Link to="/label">
        <li>LABEL_</li>
        </Link>
        <Link to="/store">
        <li>STORE_</li>
        
        </Link>
      </ul>
      </NavList>
    </Container>
  )
}

export default Nav

const Container = styled.div`
width:100%;
height:7rem;
z-index:500;
display:flex;
color:white;
position: sticky;
  top: 0;
background-color:black;
@media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    height: 8rem;
  }
`
const NavList  = styled.div`
 display:flex;
 width:100%;

 justify-content:center;
 align-items:center;
 ul{
display:flex;
li {
      cursor: pointer;
      margin: 0 2rem;
      list-style: none;
      @media (max-width: 455px) {
        margin: 0 1.5rem;
      }
      @media (max-width: 390px) {
        font-size: 0.9rem;
      }
      @media (max-width: 360px) {
        margin: 0 1rem;
      }
    }
 }
`

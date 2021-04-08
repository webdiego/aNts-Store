import styled from "styled-components";
import SliceCode from '../../img/SliceCode Dark.png'
const Footer= ()=> {
  return (
    <FooterContainer>
      <h4>Created by</h4>
      <a href="https://diego-slicecode.dev/">
      <img src={SliceCode} alt="Logo SliceCode"/>
      </a>
    </FooterContainer>
  )
}

export default Footer
const FooterContainer = styled.div`
height:15vh;
background-color:black;
color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
img{
  width:10rem;
}
`

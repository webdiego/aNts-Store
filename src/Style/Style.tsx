import styled from "styled-components";
import {motion} from "framer-motion"

export const LogoStyle = styled.img`
width:7rem ;
 height:3.5rem;
 margin:1.2rem;
`;

export const ItemsContainer = styled(motion.div)`
 display:flex;
 flex-wrap:wrap;
 flex-direction:column;
 align-content:center;
 justify-content:center;
 margin:4rem;
 @media (max-width: 430px) {
  margin:1rem;
  }
`;
export const BuySection =styled.div`
display:flex;
justify-content:space-between;
 `;
export const ButtonStyle=styled.button`
  background-color:transparent;
  cursor: pointer;
  border:none;
  padding:3px;
  transform:rotate(-40deg);
  
 `;

 export const Border = styled.div`
  width:2.1rem;
  height:2.1rem;
  border:2px solid black;
  padding:.2rem;
  transform:rotate(40deg)translateY(-10px);
 `
 export const Title =styled.h1`
 color:black;
 align-self:flex-start;
 margin:2rem 0 0 4rem;
 `
 export const BarStyle = styled(motion.span)``

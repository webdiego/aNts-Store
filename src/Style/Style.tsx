import styled from "styled-components";
import {motion} from "framer-motion"

export const LogoStyle = styled.img`
width:10rem ;
 height:6rem;
 padding:1rem;
`;

export const ItemsContainer = styled(motion.div)`
 display:flex;
 flex-wrap:wrap;
 flex-direction:column;
 align-content:center;
 justify-content:center;
 margin:4rem;
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
import styled from "styled-components";
//Img
import AntsClub from '../img/ants club.jpg'
import AntsStore from '../img/ants-store.jpg'
//Framer Motion
import { Bar } from '../Style/Animation'
import {BarStyle} from '../Style/Style'
const Label=() =>{
  return (
    <LabelContainer>
      <LabelTitle >LABEL<BarStyle initial="hidden" animate="show" variants={Bar}>_</BarStyle></LabelTitle>
      <ImgClub src={AntsClub} alt="ants club"/>
      <ImgDescription>Ants Store - Outside 1990 -</ImgDescription>
      <LabelDescription style={{color:"white"}}>
       Since 1990, Ants Records has been always a meeting point for touring and local DJs where stories and knowledge mixed together. <br/>
       
       The birth of Ants is linked with Detroit, where artists and friends like Robert Hood and Mike Banks brought their deep rhythms to help the youth techno movement in Europe to growth. 

      </LabelDescription>
      <ImgStore src={AntsStore} alt="ants store"/>
      <ImgDescription>Ants Store -Inside 1992 -</ImgDescription>

    </LabelContainer>
  )
}

export default Label

const LabelContainer = styled.div`
height:100%;
background-color:#1c1c1c;
display:flex;
align-items:center;

flex-direction:column;
`
const ImgClub = styled.img`
margin-top:4rem ;
width:70%;
filter: blur(1.1px) grayscale(80%);
 `
 const ImgStore = styled.img`
 width:70%;
 filter: blur(1px) grayscale(80%);
 margin-top:4rem;
  `
const LabelDescription = styled.p`
width:70%;
line-height:2rem;
`
const LabelTitle =styled.h1`
color:white;
align-self:flex-start;
margin:2rem 0 2rem 3rem;
`
//Framer motion animation

const ImgDescription =styled.p`
color:white;
border-bottom:1px solid white;
width:70%;
font-size:.8rem;
margin-bottom:4rem;
`
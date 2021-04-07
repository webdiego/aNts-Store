import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Bg from '../img/Background-3.jpg'
import ResidentLogo from '../img/resident-logo.png'
import BeatPortLogo from '../img/beatport-logo.png'
const Home=( )=> {
  return (
    <div>
      <HomeStyle style ={{backgroundImage: `url(${Bg})`,height:"50rem"}}>
        <MainTitle >MUSIC is THE aNswEr|</MainTitle> 
      
       <City>Milan__ Sydney__ Berlin__ London__ Lisbon__ Kiev__</City>
       
       <ContainerLogos>
       <Partners >Partners _</Partners>
       <a href="https://ra.co/">
       <RaLogo src={ResidentLogo} alt="Resident Advisor logo"/>
       </a>
       <a href="https://www.beatport.com/">
       <BeatLogo src={BeatPortLogo} alt="BeatPort logo"/>
       </a>
       </ContainerLogos>
      </HomeStyle>
    </div>
  )
}

export default Home

const HomeStyle = styled.div`
 height:100%;
 width:100%;
 background-color:#272727;
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-evenly;
 
`
const MainTitle = styled.h1`
font-size:12rem;
filter:blur(1.5px) contrast(200%);
color:#171618;
@media (max-width: 1155px) {
   font-size:8rem;
  }
  @media (max-width: 700px) {
   font-size:7rem;
  }
  @media (max-width: 500px) {
   font-size:5rem;
  }
`
const City = styled.p`
font-size:2rem;
color:white;
margin:0 1.5rem;
text-align:center;
@media (max-width: 800px) {
   font-size:1.3rem;
  }
@media (max-width: 500px) {
   font-size:1.3rem;
  }
`
const ContainerLogos =styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
`
const BeatLogo = styled.img`
 height:5rem;
 width:12.5rem;
 @media (max-width:430px) {
   height:3rem;
 width:7.5rem;
  }
`
const RaLogo = styled.img`
 height:2rem;
 width:3.5rem;
 @media (max-width: 430px) {
  height:1.5rem;
 width:2.5rem
  }
`
const Partners = styled.h3`
margin-right:1.3rem;
color:white;
@media (max-width:350px) {
   font-size:.9rem;
  }
`
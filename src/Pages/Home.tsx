//Styled Components
import styled from "styled-components";
//Img
import Bg from "../img/Background-3.jpg";
import ResidentLogo from "../img/resident-logo.png";
import BeatPortLogo from "../img/beatport-logo.png";
//Framer Motion
import { motion } from "framer-motion";
import {CategoryAnimation , Bar} from '../Style/Animation'

const Home = () => {
  return (
    <div>
      <HomeStyle style={{ backgroundImage: `url(${Bg})`, height: "50rem" }}>
        <MainTitle initial="hidden" animate="show" variants={CategoryAnimation}>
          MUSIC is THE aNswEr
          <BarStyle initial="hidden" animate="show" variants={Bar}>|</BarStyle>
        </MainTitle>

        {/* <City initial="hidden" animate="show" variants={CityAnimation}>Milan__ Sydney__ Berlin__ London__ Lisbon__ Kiev__</City> */}

        <ContainerLogos initial="hidden" animate="show" variants={PartnersAnimation}>
          <Partners>Partners_</Partners>
          <a href="https://ra.co/">
            <RaLogo src={ResidentLogo} alt="Resident Advisor logo" />
          </a>
          <a href="https://www.beatport.com/">
            <BeatLogo src={BeatPortLogo} alt="BeatPort logo" />
          </a>
        </ContainerLogos>
      </HomeStyle>
    </div>
  );
};

export default Home;

const HomeStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #272727;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MainTitle = styled(motion.h1)`
  font-size: 10rem;
  filter: blur(1.5px) contrast(200%);
  color: #171618;
  margin:1rem;
  @media (max-width: 700px) {
    font-size: 7rem;
  }
  @media (max-width: 500px) {
    font-size: 5rem;
  }
`;
// const City = styled(motion.p)`
//   font-size: 1.8rem;
//   color: white;
//   margin: 0 1.5rem;
//   text-align: center;
//   @media (max-width: 800px) {
//     font-size: 1.3rem;
//   }
//   @media (max-width: 500px) {
//     font-size: 1.3rem;
//   }
// `;
const ContainerLogos = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const BeatLogo = styled.img`
  height: 4.5rem;
  width: 12.5rem;
  @media (max-width: 430px) {
    height: 3rem;
    width: 7.5rem;
  }
`;
const RaLogo = styled.img`
  height: 2rem;
  width: 3.5rem;
  @media (max-width: 430px) {
    height: 1.5rem;
    width: 2.5rem;
  }
`;
const Partners = styled.h3`
  margin-right: 1.3rem;
  color: white;
  @media (max-width: 350px) {
    font-size: 0.9rem;
  }
`;
const BarStyle = styled(motion.span)``

//Framer Motion Animation


// const CityAnimation = {
//   hidden: {
//     x: -2000,
//     opacity: 0,
//   },
//   show: {
//    x: 0,
//    opacity: 1,
//     transition: {  delay:.6, duration:1.5, ease: "anticipate" },
//   },
// }

const PartnersAnimation ={
  hidden: {
    x: -2000,
    opacity: 0,
  },
  show: {
   x: 0,
   opacity: 1,
    transition: {  delay:.8, duration:1.5, ease: "anticipate" },
  },
}
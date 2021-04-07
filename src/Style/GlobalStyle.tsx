import "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-size:62,5%;
  font-family: 'JetBrains Mono', monospace;
}

h2{
  font-size: 1rem;
  text-transform:uppercase;
  margin:.2rem 0;
}
img{
  width:18rem;
  @media (max-width: 1000px) {
   width:15rem;
  }
  @media (max-width: 800px) {
   width:13rem;
  }
  @media (max-width: 679px) {
   width:22rem;
  }
  @media (max-width: 395px) {
   width:15rem;
  }
}
a{
  text-decoration:none;
  color:white;
}
`;
export default GlobalStyle;

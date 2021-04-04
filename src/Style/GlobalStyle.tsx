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
  //!MEDIA QUERY
}
`;
export default GlobalStyle;

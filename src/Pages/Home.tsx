import {Link} from 'react-router-dom'
import styled from 'styled-components'
const Home=()=> {
  return (
    <div>
      <HomeStyle>

      <Link to='/store'>
        <button>Store</button>
      </Link>
      </HomeStyle>
    </div>
  )
}

export default Home

const HomeStyle = styled.div`
 height:100vh;
 width:100%;
 background-color:#272727;
`
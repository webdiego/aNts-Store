import { Gadget} from "../Interfaces/Interfaces";
import { motion } from "framer-motion";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styled from "styled-components"
import { ItemsContainer, BuySection, ButtonStyle, Border } from "../Style/Style";

interface Props {
  Item :Gadget
  // addToCart:(clickedItem : Products)=>void;
}
const GadgetItem: React.FC<Props>=({Item})=> {
  return (
    <div>
      <ItemsContainer>
      <img src={Item.img} alt="" />
      <h2>{Item.name}</h2>

      <BuySection className="buy">
        <h2>$ {Item.price}</h2>
        <Border>
          <ButtonStyle>
            <ShoppingCartOutlinedIcon fontSize="small"></ShoppingCartOutlinedIcon>
          </ButtonStyle>
        </Border>
      </BuySection>
    </ItemsContainer>
    </div>
  )
}

export default GadgetItem

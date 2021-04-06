import { Vinyl } from "../Interfaces/Interfaces";
import { motion } from "framer-motion";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styled from "styled-components"
import { ItemsContainer, BuySection, ButtonStyle, Border } from "../Style/Style";

interface Props {
  Item: Vinyl;
  // addToCart:(clickedItem : Products)=>void;
}
const VinylItem: React.FC<Props> = ({ Item }) => {

  return (
    <ItemsContainer>
      <img src={Item.img} alt="" />
      <h2>{Item.artist}</h2>
      <h2>{Item.trackName}</h2>
      <h2>{Item.released}</h2>

      <BuySection className="buy">
        <h2>$ {Item.price}</h2>
        <Border>
          <ButtonStyle>
            <ShoppingCartOutlinedIcon fontSize="small"></ShoppingCartOutlinedIcon>
          </ButtonStyle>
        </Border>
      </BuySection>
    </ItemsContainer>
  );
};

export default VinylItem;

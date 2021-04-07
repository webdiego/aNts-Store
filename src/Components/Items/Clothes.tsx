//Interfaces
import { Cloth, Products } from "../../Interfaces/Interfaces";
//Framer Motion
import { motion } from "framer-motion";
//Material UI
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
//Style
import { ItemsContainer, BuySection, ButtonStyle, Border } from "../../Style/Style";

interface Props {
  Item: Cloth;
  addToCart: (Item: Products) => void;
  openCart:(openCart:boolean)=>void;
}

const ClothesItem: React.FC<Props> = ({ Item, addToCart,openCart }) => {
  return (
    <ItemsContainer>
      <motion.img
        src={Item.bothImg.front}
        onMouseEnter={(e) => (e.currentTarget.src = Item.bothImg.back)}
        onMouseLeave={(e) => (e.currentTarget.src = Item.bothImg.front)}
        alt={Item.name}
      />

      <h2>
        {Item.name}
        {Item.type}
      </h2>
      <BuySection>
        <h2>$ {Item.price}</h2>
        <Border>
          <ButtonStyle onClick={() => {addToCart(Item) ; openCart(true)}}>
            <ShoppingCartOutlinedIcon
              fontSize="small"
            ></ShoppingCartOutlinedIcon>
          </ButtonStyle>
        </Border>
      </BuySection>
    </ItemsContainer>
  );
};

export default ClothesItem;


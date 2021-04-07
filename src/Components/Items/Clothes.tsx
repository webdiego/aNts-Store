import { Cloth, Products } from "../../Interfaces/Interfaces";
import { motion } from "framer-motion";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { ItemsContainer, BuySection, ButtonStyle, Border } from "../../Style/Style";
interface Props {
  Item: Cloth;
  addToCart: (Item: Products) => void;
  openCart:(openCart:boolean)=>void;
}

const ClothesItem: React.FC<Props> = ({ Item, addToCart,openCart }) => {
  return (
    <ItemsContainer initial="hidden" animate="show" variants={titleAnimation}>
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

//Animation title
const titleAnimation = {
  hidden: {
    y: 100,
    scale: 1.2,
  },
  show: {
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};


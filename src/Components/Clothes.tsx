import { Cloth, Products } from "../Interfaces/Interfaces";
import { motion } from "framer-motion";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

interface Props {
  Item: Cloth ;
  addToCart: (Item: Products) => void;
}

const ClothesItem: React.FC<Props> = ({ Item, addToCart }) => {
  return (
    <ClothesContainer initial="hidden" animate="show" variants={titleAnimation}>
      <motion.img
        src={Item.bothImg.front}
        whileHover={{ scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }}
        onMouseEnter={(e) => (e.currentTarget.src = Item.bothImg.back)}
        onMouseLeave={(e) => (e.currentTarget.src = Item.bothImg.front)}
        alt={Item.name}
      />

      <h2>
        {Item.name}
        {Item.type}
      </h2>
      <Buy className="buy">
        <h2>$ {Item.price}</h2>
        <Border>
          <ButtonStyle onClick={() => addToCart(Item)}>
            <ShoppingCartOutlinedIcon
              onClick={() => addToCart}
              fontSize="small"
            ></ShoppingCartOutlinedIcon>
          </ButtonStyle>
        </Border>
      </Buy>
    </ClothesContainer>
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

const ClothesContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 4rem;
`;
const Buy = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonStyle = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  padding: 3px;
  transform: rotate(-40deg);
`;

const Border = styled(motion.div)`
  width: 2.1rem;
  height: 2.1rem;
  border: 2px solid black;
  padding: 0.2rem;
  transform: rotate(40deg) translateY(-10px);
`;

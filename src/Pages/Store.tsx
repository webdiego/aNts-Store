import { useState } from "react";
//React-Query
import { useQuery } from "react-query";
//Components
import ClothesItem from "../Components/Items/Clothes";
import VinylItem from "../Components/Items/Vinyl";
import GadgetItem from "../Components/Items/Gadget";
import CartAll from "../Components/Cart/Cart";

//Interface
import { Products } from "../Interfaces/Interfaces";
//Material UI
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
//Styled Components
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";

const getProducts = async (): Promise<Products[]> => {
  return await (await fetch("https://ants-store-api.herokuapp.com/data")).json();
};

const Store = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as Products[]);
  const { data: products, isLoading, error, isIdle } = useQuery<Products[]>(
    "products",
    getProducts,
    { refetchOnWindowFocus: false }
  );

  if (isLoading || isIdle)
    return (
      <h1 style={{ height: "100vh" }}>
        <LinearProgress color="primary" />
      </h1>
    );
  if (error) return <h1>ERROR</h1>;

  let ClothesItems = products?.[0].clothes;
  let VinylItems = products?.[1].vinyl;
  let GadgetItems = products?.[2].gadget;

  const getTotalItems = (items: Products[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const addToCart = (clickedItem: Products) => {
    setCartItems((prev) => {
      // Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as Products[])
    );
  };
  const openCart = (cartOpen: boolean) => setCartOpen(true);

  return (
    <div style={{ width: "100%" }}>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartAll cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      </Drawer>

      {/* BUTTON CART */}
      <ButtonContainer>
        <ButtonCart onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} max={20} color="primary">
            <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
          </Badge>
        </ButtonCart>
      </ButtonContainer>

      <StoreContainer  className="container" initial="hidden" animate="show"  variants={CategoryAnimation}>
        <div id="Clothes">
          <TitleCategory >Clothes</TitleCategory>
          <Container>
            {ClothesItems?.map((Item) => (
              <ClothesItem Item={Item} key={Item.id} addToCart={addToCart} openCart={openCart} />
            ))}
          </Container>
        </div>

        <div id="Vinyl" >
          <TitleCategory>Vinyl</TitleCategory>
          <Container>
            {VinylItems?.map((Item) => (
              <VinylItem Item={Item} key={Item.id} addToCart={addToCart} openCart={openCart} />
            ))}
          </Container>
        </div>

        <div id="Gadget">
          <TitleCategory>Gadget</TitleCategory>
          <Container>
            {GadgetItems?.map((Item) => (
              <GadgetItem Item={Item} key={Item.id} addToCart={addToCart} openCart={openCart} />
            ))}
          </Container>
        </div>
      </StoreContainer>
    </div>
  );
};

export default Store;

const StoreContainer = styled(motion.div)`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const ButtonCart = styled.button`
  margin: 2rem;
  border: none;
  background-color: white;
  outline-style: none;
  cursor:pointer;
`;
const TitleCategory = styled.h1`
  margin-left: 4rem;
  @media (max-width: 430px) {
    margin: 1rem;
    text-align: center;
  }
`;
const CategoryAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

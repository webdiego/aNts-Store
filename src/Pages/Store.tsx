import { useState } from "react";
//React Query
import { useQuery } from "react-query";
//Components
import ClothesItem from "../Components/Clothes";
import VinylItem from "../Components/Vinyl";
import GadgetItem from "../Components/Gadget";
//Interface
import {  Products } from "../Interfaces/Interfaces";
//COMPONENTS STYLE UI
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
//Styled Components
import styled from "styled-components";
//Components
 import CartAll from '../Components/Cart/Cart'

const getProducts = async (): Promise< Products[]> => {
  return await (await fetch("https://ants-store-api.herokuapp.com/data")).json();
};

const Store = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as Products[]);
  const { data: products, isLoading, error, isIdle } = useQuery<Products[] >(
    "products",
    getProducts,
    { refetchOnWindowFocus: false }
  );

  if (isLoading || isIdle)
    return (
      <h1>
        <LinearProgress color="primary" />
      </h1>
    );
  if (error) return <h1>ERROR</h1>;

  let ClothesItems = products?.[0].clothes;
  let VinylItems = products?.[1].vinyl;
  let GadgetItems = products?.[2].gadget;

  const getTotalItems = (items: Products[]) =>
  items.reduce((ack: number, item) => ack + item.amount, 0);

  const addToCart =(clickedItem:Products)=>{
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });


  }

  const removeFromCart = (id: number) => {
    setCartItems(prev =>
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
 console.log(cartItems)
  return (
    <div>
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
       
      >
         <CartAll 
         cartItems={cartItems} 
         addToCart={addToCart} 
         removeFromCart={removeFromCart} /> 
      </Drawer>

      {/* BUTTON CART */}
      <button onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} max={20} color="primary">
          <ShoppingCartIcon></ShoppingCartIcon>
        </Badge>
      </button>

      <StoreContainer className="container">
        <h1>Clothes</h1>
        <Container className="Clothes">
          {ClothesItems?.map((Item) => (
            <ClothesItem Item={Item} key={Item.id} addToCart={addToCart} />
          ))}
        </Container>

        <div className="Vinyl">
          <h1>Vinyl</h1>
          <Container>
            {VinylItems?.map((Item) => (
              <VinylItem Item={Item} key={Item.id} />
            ))}
          </Container>
        </div>

        <div className="Gadget"></div>
        <h1>Gadget</h1>
        <Container>

        {GadgetItems?.map((Item) => (
          <GadgetItem Item={Item} key={Item.id} />
        ))}
        </Container>
      </StoreContainer>
    </div>
  );
};

export default Store;

const StoreContainer = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

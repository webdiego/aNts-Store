import { useState } from "react";
//React Query
import { useQuery } from "react-query";
//Components
import ClothesItem from "../Components/Clothes";
import VinylItem from "../Components/Vinyl";
import GadgetItem from "../Components/Gadget";
//Interface
import { Products } from "../Interfaces/Interfaces";
//COMPONENTS STYLE UI
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

import styled from "styled-components"

const getProducts = async (): Promise<Products[]> => {
  return await (await fetch("https://ants-store-api.herokuapp.com/data")).json();
};
const getTotalItems = () => null;
const addToCart = (clickedItem: Products) => null;
const removeToCart = () => null;

const Store = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { data: products, isLoading, error, isIdle } = useQuery<Products[]>(
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


  return (
    <>
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        style={{ margin: "30rem" }}
      >
        <h1>helloooooooooooooooooooooooo</h1>
      </Drawer>
     
     {/* BUTTON CART */}
      <button onClick={() => setCartOpen(true)}>
        <Badge badgeContent={10} max={20} color="primary">
          <ShoppingCartIcon></ShoppingCartIcon>
        </Badge>
      </button>
      <StoreContainer className="container">

      <h1>Clothes</h1>
      <ClothesContainer className="Clothes">
        {ClothesItems?.map((Item) => (
          <ClothesItem Item={Item} addToCart={addToCart} />
        ))}
      </ClothesContainer>

      <div className="Vinyl">
      <h1>Vinyl</h1>
        {VinylItems?.map((Item) => (
          <VinylItem Item={Item} addToCart={addToCart} />
        ))}
      </div>
      
      <div className="Gadget">
      </div>
      <h1>Gadget</h1>
        {GadgetItems?.map((Item) => (
          <GadgetItem Item={Item} addToCart={addToCart} />
        ))}
      </StoreContainer>
    </>
  );
};

export default Store;

const StoreContainer = styled.div`
 width:100%;
 
`
const ClothesContainer = styled.div`
 width:100%;
 display:flex;
 flex-wrap:wrap;
 justify-content:space-between;
`
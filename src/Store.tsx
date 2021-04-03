import {useState} from 'react'
//React Query
import { useQuery } from "react-query";
//Components
import ClothesItem from "./Components/Clothes";
import VinylItem from './Components/Vinyl'
import GadgetItem from './Components/Gadget'
//Interface
import { Products } from "./Interfaces/Interfaces";
//COMPONENTS STYLE UI
import Drawer from "@material-ui/core/Drawer"
import LinearProgress from "@material-ui/core/LinearProgress"


const getProducts = async (): Promise<Products[]> => {
  return await (await fetch("https://ants-store-api.herokuapp.com/data")).json();
};
const getTotalItems =() => null;
const addToCart =(clickedItem :Products) => null;
const removeToCart =() => null;


const Store = () => {
  const [cartOpen,setCartOpen]=useState(false)
  const { data: products, isLoading, error, isIdle } = useQuery<Products[]>(
    "products",
    getProducts
  );

  if (isLoading || isIdle) return <h1><LinearProgress color="primary"/></h1>;
  if (error) return <h1>ERROR</h1>;

  let ClothesItems = products?.[0].clothes;
  let VinylItems = products?.[1].vinyl;
  let GadgetItems = products?.[2].gadget;
  return (
    <>
      <Drawer anchor='right' open={cartOpen} onClose={()=>setCartOpen(false)} style={{margin:'30rem'}} >
        <h1>helloooooooooooooooooooooooo</h1>
        
       </Drawer>
       <button onClick={()=>setCartOpen(true)}></button>

      <h1>Clothes</h1>
      <div >
        {ClothesItems?.map((Item) => (
          <ClothesItem Item={Item} addToCart={addToCart} />
        ))}
      </div>
      <h1>Vinyl</h1>
      <div >
        {VinylItems?.map((Item) => (
          <VinylItem Item={Item} addToCart={addToCart} />
        ))}
      </div>
      <h1>Gadget</h1>
      <div >
        {GadgetItems?.map((Item) => (
          <GadgetItem Item={Item} addToCart={addToCart} />
        ))}
      </div>

    
    </>
  );
};

export default Store;

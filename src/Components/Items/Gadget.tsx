import { Gadget , Products} from "../../Interfaces/Interfaces";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { ItemsContainer, BuySection, ButtonStyle, Border } from "../../Style/Style";

interface Props {
  Item :Gadget
   addToCart:(clickedItem : Products)=>void;
   openCart:(openCart:boolean)=>void;
}
const GadgetItem: React.FC<Props>=({Item , addToCart, openCart})=> {
  return (
    <div>
      <ItemsContainer>
      <img src={Item.img} alt="" />
      <h2>{Item.name}</h2>

      <BuySection className="buy">
        <h2>$ {Item.price}</h2>
        <Border>
          <ButtonStyle onClick={() => {addToCart(Item) ; openCart(true)}}>
            <ShoppingCartOutlinedIcon fontSize="small"></ShoppingCartOutlinedIcon>
          </ButtonStyle>
        </Border>
      </BuySection>
    </ItemsContainer>
    </div>
  )
}

export default GadgetItem

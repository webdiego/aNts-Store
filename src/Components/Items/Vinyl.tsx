//Interfaces
import { Vinyl , Products } from "../../Interfaces/Interfaces";
//Materia UI
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
//Style
import { ItemsContainer, BuySection, ButtonStyle, Border } from "../../Style/Style";

interface Props {
  Item: Vinyl;
  addToCart:(clickedItem : Products)=>void;
  openCart:(openCart:boolean)=>void;
}
const VinylItem: React.FC<Props> = ({ Item , addToCart, openCart}) => {

  return (
    <ItemsContainer>
      <img src={Item.img} alt="" />
      <h2>{Item.artist}</h2>
      <h2>{Item.trackName}</h2>
      <h2>{Item.released}</h2>

      <BuySection className="buy">
        <h2>$ {Item.price}</h2>
        <Border>
          <ButtonStyle  onClick={() => {addToCart(Item) ; openCart(true)}}>
            <ShoppingCartOutlinedIcon fontSize="small"></ShoppingCartOutlinedIcon>
          </ButtonStyle>
        </Border>
      </BuySection>
    </ItemsContainer>
  );
};

export default VinylItem;

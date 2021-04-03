import { Gadget,Products} from "../Interfaces/Interfaces";
interface Props {
  Item :Gadget
  addToCart:(clickedItem : Products)=>void;
}
const GadgetItem: React.FC<Props>=({Item,addToCart})=> {
  return (
    <div>
      
    </div>
  )
}

export default GadgetItem

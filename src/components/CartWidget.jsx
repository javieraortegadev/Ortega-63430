import {CiShoppingCart} from 'react-icons/ci'
import Badge from 'react-bootstrap/Badge';
const CartWidget = () => {
    return (
        <div className="cartWidget-container">
           <CiShoppingCart color='black' fontSize={'2rem'} />
           <Badge bg="dark">5</Badge>
          
        </div>
    )
}
export default CartWidget
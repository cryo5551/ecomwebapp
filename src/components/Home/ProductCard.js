import { Button, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addItem} from '../Store/Actions/cart.action';
// import { UserOutlined } from '@ant-design/icons';

const ProductCard = (props) =>{
    const dispatch = useDispatch();

    const {image,title,price,rating,id} = props;

    const addItemToCart = ()=>{
        dispatch(addItem({...props, quantity: 1}));
        toast.success("Added to cart successfully")
    }
    
    const cartItems = useSelector(store => store.cart);

    const isButtonDisabled = () => {
        const findItem = cartItems.find(item => item.id === id);
        return findItem?true:false;
    }

    return  (
  <Card
    hoverable
    style={{
      width: '25%',
      margin: '15px 20px'
    }}
    cover={<img style={{maxHeight: '240px',objectFit: 'contain'}} alt="example" src={image} />}
  >
    <h3>{title}</h3>
    <h2>Price: INR {price}</h2>
    <p>⭐ {rating.rate}/5 (👤{rating.count})</p>
    <Button type='primary' disabled={isButtonDisabled()} onClick={addItemToCart}> Add to cart </Button>
  </Card>
);}
export default ProductCard;
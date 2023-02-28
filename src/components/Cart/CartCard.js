import { Button, Card, Space, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { removeItem, increaseQuantityByOne, decreaseQuantityByOne } from '../Store/Actions/cart.action';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;


const { Meta } = Card;

const CartCard = (props) =>{
    const dispatch = useDispatch();
    const {image,title,price, quantity} = props;

    const removeItemFromCart = _ => {
      confirm({
        title: 'Do you Want to delete this item?',
        icon: <ExclamationCircleFilled />,
        content: title,
        // okType: 'danger',
        onOk() {
          console.log('OK');
          dispatch(removeItem(props.id))
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    const increaseQuantity = _ => {dispatch(increaseQuantityByOne(props.id))};
    const decreaseQuantity = _ => {dispatch(decreaseQuantityByOne(props.id))};

    return  (
  <Card
    hoverable
    style={{
      width: '40%',
      margin: '15px 20px'
    }}
    cover={<img style={{maxHeight: '100px',objectFit: 'contain',padding: 2}} alt="example" src={image} />}
  >
    <Meta title={title} />
    <h2>Price: INR {price}</h2>
    
    <Space>
    <Button onClick={removeItemFromCart} type='primary' danger> Remove </Button>
        <Button onClick={decreaseQuantity} >➖</Button>
        <span style={{fontSize:"20px", margin:"3px"}}>{quantity}</span>
        <Button onClick={increaseQuantity} >➕</Button>
    </Space>
  </Card>
);}

export default CartCard;
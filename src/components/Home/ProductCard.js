import { Card, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Meta } = Card;
const ProductCard = (props) => {

  const navigate = useNavigate();
  const { image, title, price, rating, id } = props;


  return (
    <Card
      hoverable
      style={{ width: '20%', margin: '15px 20px' }}
      cover={<img style={{ maxHeight: '150px', objectFit: 'contain', paddingTop: 5 }} alt="example" src={image} />}
      onClick={() => { navigate(`/product/${id}`) }}
    >
      <Meta title={title} description={<h3>Price: INR {price}</h3>} />
      <span><Rate disabled allowHalf defaultValue={rating.rate} /> </span><br />
      <span>👤{rating.count}</span>
    </Card>
  );
}

export default ProductCard;
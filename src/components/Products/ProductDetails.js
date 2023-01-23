import { useParams } from 'react-router-dom';
import { Button, Spin, Space, Rate } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addItem } from '../Store/Actions/cart.action';


const ProductDetails = () => {


    const { id: productID } = useParams()
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addItem({ ...products, quantity: 1 }));
        toast.success("Added to cart successfully")
    }

    const cartItems = useSelector(store => store.cart);

    const isButtonDisabled = () => {
        const findItem = cartItems.find(item => item.id === parseInt(productID));
        return findItem ? true : false;
    }


    const fetchProducts = async () => {


        try {
            setLoading(true);
            // const responce = await fetch('https://api.storerestapi.com/products ');
            const responce = await fetch(`https://fakestoreapi.com/products/${productID}`);
            if (responce.status === 200) {
                const data = await responce.json();
                setProducts(data);
            }
            else setError("something went wrong")
            setLoading(false);

        } catch (e) {
            console.log(e);
            setLoading(false);
            setError(e?.massage)
        };
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    if (loading) {
        return (
            <Space style={{ width: '100%', display: 'flex', margin: '200px auto', justifyContent: 'center', alignItems: 'center' }}>
                
                <Spin tip="Loading" size="large"></Spin>
            </Space>
        );
    }

    if (error) return <h1 style={{ width: '100%', display: 'flex', margin: '50px auto', justifyContent: 'center', alignItems: 'center' }}
    >Something went wrong</h1>

    console.log(products)

    return (
        <div>

            <div style={{ width: "95%", display: "flex", margin: '50px auto', alignItems: 'center' }}>

                <section style={{ padding: "0 auto" }}>

                    <img style={{ maxHeight: '300px', maxWidth: '250px', objectFit: 'contain', paddingTop: 5, paddingBottom: 15 }}
                        src={products.image} alt="productIMG" />

                    <Button type='primary' disabled={isButtonDisabled()} onClick={addItemToCart} block> Add to cart </Button>
                
                </section>

                <section style={{ marginLeft: 50, padding: 50, }}>

                    <h1 style={{ fontSize: '1.69rem' }}>{products.title}</h1>

                    <p>{products?.description}</p>

                    <span><Rate disabled allowHalf defaultValue={products?.rating?.rate} /> </span>

                    <span> 👤{products?.rating?.count}</span><br /><br />

                    <h1 style={{ fontSize: '1.20rem' }}>Price: INR {products?.price}</h1>

                    {/* <span>{products?.category}</span> */}
                </section>
            </div>
        </div>
    )
}

export default ProductDetails;
import { Spin, Space } from 'antd';

import { useEffect, useState } from 'react';

import ProductCard from './ProductCard';



const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchProducts = async () => {


        try {
            setLoading(true);
            // const responce = await fetch('https://api.storerestapi.com/products ');
            const responce = await fetch('https://fakestoreapi.com/products');
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
            <Space
                style={{
                    width: '100%',
                    display: 'flex',
                    margin: '200px auto',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Spin tip="Loading" size="large">
                </Spin>
            </Space>
        );
    }

    if (error) return <h1
    style={{
        width: '100%',
        display: 'flex',
        margin: '50px auto',
        justifyContent: 'center',
        alignItems: 'center'
    }}>Something went wrong</h1>

    console.log(products);

    return (
        <div
        style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 auto',
            justifyContent: 'center',
            // alignItems: 'center'
        }}
        >
            {products.map((e) =><ProductCard key={e.id} {...e}/>)}
        </div>
    );
}

export default Home;
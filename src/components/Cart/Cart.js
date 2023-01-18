
import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';
import { Button, Card } from 'antd';

const Cart = () => {
    const cartItems = useSelector(store => store.cart);
    const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0)
    if (cartItems.length < 1) return (<h2>No Items in the cart</h2>);
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                // backgroundColor: 'red'

            }}>
            <div
                style={{
                    width: '60%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    // backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {cartItems.map(item => <CartCard key={item.id} {...item} />)}
            </div>
            <div style={{
                width: '35%',
                // backgroundColor: "yellow",
                margin: "0 auto",
                position: 'fixed',
                top:'100px',
                right: '1px',
                height: '900px'
            }}>

                
                <div className="site-card-border-less-wrapper">
                    <Card
                        title={<h1>Total</h1>}
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        {cartItems.map(e=>
                        <p style={{display:'flex',justifyContent: "space-between"}}>
                            <span>{e.title.substring(0,21)+ "..."}</span>
                            <span>{e.quantity}×{e.price}</span></p>)}

                        <h1>INR {total.toFixed(2)}</h1>

                        <Button width='100%' type='primary' block>Cheakout</Button>
                    </Card>
                </div>
            </div>
        </div>

    );
}


export default Cart;
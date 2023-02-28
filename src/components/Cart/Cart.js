import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';
import { Button, Card } from 'antd';
import useRazorpay from "react-razorpay";
import { toast } from 'react-toastify';

const Cart = () => {

    const Razorpay = useRazorpay();

    const cartItems = useSelector(store => store.cart);
    const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0)

    const token = useSelector(store => store.token.token);

    

    if (cartItems.length < 1) return (<h2>No Items in the cart</h2>);

    let PAYMENT_OPTIONS = {
        "key": "rzp_test_aMcM3XT5Bnmh1l", // Enter the Key ID generated from the Dashboard
        "amount": { total }, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "E-com corp",
        "description": "Test Transaction",
        "image": "https://i.pravatar.cc/300",
        "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
        },
        "prefill": {
            "name": "Bhawani Shankar",
            "email": "bhawani.shankar@gmail.com",
            "contact": "6969696969"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3366cc"
        }
    };

    const cheakOut = async () => {

        try {
            const responce = await fetch('http://localhost:4500/order', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: parseInt(total * 100), receipt: "#69" })
            })

            const data = await responce.json();
            if (responce.status === 200) {
                console.log(data)
                PAYMENT_OPTIONS = { ...PAYMENT_OPTIONS, "order_id": data.data.id }
            }
            else toast.warning("failed to genrate order id");
        } catch (err) {
            console.log('Error:', err);
        }

        let rzp1 = new Razorpay(PAYMENT_OPTIONS);
        rzp1.on('payment.failed', function (response) {
            toast.error(response.error.code);
            toast.error(response.error.description);
        });

        rzp1.open();
        // e.preventDefault();
    }


    return (
        <div
            style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            <div
                style={{ width: '60%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {cartItems.map(item => <CartCard key={item.id} {...item} />)}
            </div>




            {/* // cheakout  */}
            <div style={{ width: '35%', margin: "0 auto", position: 'fixed', top: '100px', right: '1px', height: '900px' }}>

                <div className="site-card-border-less-wrapper">
                    <Card
                        title={<h1>Total</h1>}
                        bordered={false}
                        style={{ width: 300 }}
                    >
                        {cartItems.map(e =>
                            <p style={{ display: 'flex', justifyContent: "space-between" }} key={e.id}>
                                <span>{e.title.substring(0, 21) + "..."}</span>
                                <span>{e.quantity}×{e.price}</span>
                            </p>)}

                        <h1>INR {total.toFixed(2)}</h1>

                        <Button width='100%' type='primary' block onClick={cheakOut} disabled={(!token)? true: false} >Cheakout</Button>
                    </Card>
                </div>
            </div>
        </div>

    );
}


export default Cart;
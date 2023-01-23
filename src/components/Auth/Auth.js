import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector }  from 'react-redux';
import setUserData from '../Store/Actions/userAction'
import { setToken } from '../Store/Actions/tokenAction';


const Auth = (props) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    const authToken = useSelector(store => store.token.token)
    // const authToken = localStorage.getItem("authrization");
    if (!authToken) toast.warning("Youre not logged in");
    


    const fetchProfileData = async () => {
        try {
            const responce = await fetch("http://localhost:4500/profile", {
                method: "GET",
                headers: {
                    'authorization': authToken
                }
            });

            const data = await responce.json();
            if(responce.status === 200)
            {
                console.log(data.profile);
                dispatch(setUserData(data.profile));
                // window.location.reload(false);

            }

            else toast.warning(data.message);


        } catch (err) {
            console.log(err);
        }
    }



    const onLogin = async (values) => {
        try {
            const responce = await fetch('http://localhost:4500/auth', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });

            const data = await responce.json();

            if (responce.status === 200) {
                // localStorage.setItem('authrization', data.token);
                dispatch(setToken(data.token));
                fetchProfileData();
                navigate("/");
                toast.success("login successfull");
            }
            else toast.warn(data.message);

        } catch (err) {
            console.log('Error:', err);
        }
    };



    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const authStyle = {
        // width: '100%',
        // Height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '100px auto',
    }

    return (
        <div style={authStyle}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onLogin}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
}

export default Auth;
// import { useState } from "react";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

const linkStyle = {
    color: 'white',
    padding: '10px'
}


const Nevbar = () => {

    const { avatar} = useSelector(store => store.user);
    const token = useSelector(store => store.token.token);

    return (
        <div style={{
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        }}>

            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" alt="l0g0" width={20}></img>
                <Link style={linkStyle} to="/" >Home</Link>
            </div>
            <div
                style={{
                    color: 'white',
                }}>
                <Link style={linkStyle} to="/cart" >Cart</Link>
                <Link style={linkStyle} to={(!token)? "/auth": "/logout"} >Auth</Link>
                <Link style={linkStyle} to={token? '/profile' : '/auth'} >
                    <Avatar size={40} src={avatar} icon={<UserOutlined />} />
                </Link>

            </div>

        </div>
    );
}

export default Nevbar;
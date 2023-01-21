import { useState } from "react";
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

    const {name, avatar} = useSelector(store => store.user)


    const [token, setToken] = useState(localStorage.getItem('authrization'));

    let isLoggenIn = token ? true : false; 

    const logInOut = _ => {
        setToken(localStorage.getItem('authrization'));
    } 

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
                <Link style={linkStyle} to="/auth" >{(!name)?"Log In":`Hello, ${name}`}</Link>
                <Link onClick={logInOut} style={linkStyle} to={isLoggenIn ? '/profile' : '/auth'} >
                    <Avatar size={40} src={avatar} icon={<UserOutlined />} />
                </Link>

            </div>

        </div>
    );
}

export default Nevbar;
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
// import Column from 'antd/es/table/Column';



const Profile = () => {
    const {name, email, phone , address, avatar} = useSelector(store => store.user)
    // console.log(user);
    return (
       <Space direction='vertical'>
       <Avatar size={120} src={avatar} icon={<UserOutlined />} />
       <h3>{name}</h3>
       <p>{email}</p>
       <p>{phone}</p>
       <p>{address?.city}, {address?.state}</p>
       <p>{address?.country}</p>

       </Space> 
    );
}

export default Profile;
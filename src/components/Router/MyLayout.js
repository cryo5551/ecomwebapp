import React from 'react';
import {Layout} from 'antd';
// import {Link} from 'react-router-dom';
import Nevbar from '../Nevbar/Nevbar';


const { Header, Content, Footer } = Layout;
const styl = {
  width: '100%'

}

// const menuArr = [{
//     path: '/',
//     value: 'Home'
// },{
//     path: '/cart',
//     value: 'Cart'
// },{
//     path: '/auth',
//     value: 'Auth'
// },{
//     path: '/profile',
//     value: 'Profile'
// }
// ]

const MyLayout = ({children}) => {

  return (
    <Layout className="layout">
      <Header style={{ 
        padding: '0 5px',
        position: 'sticky',
        top: '0',
        zIndex: 100
        }}>
        <Nevbar style={styl} />
      </Header>
      <Content 
      style={{ 
        padding: '0 50px',
        backgroundColor: '#ffffff',
        minHeight: '79vh'
        }}>

       {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Fake Store©2023 Created by Bhawani LTD</Footer>
    </Layout>
  );
};

export default MyLayout;
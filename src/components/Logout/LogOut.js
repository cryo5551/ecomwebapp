import { useDispatch } from "react-redux";
import { PoweroffOutlined } from '@ant-design/icons';
import { removeUserData } from "../Store/Actions/userAction";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import { removeToken } from "../Store/Actions/tokenAction";



const { confirm } = Modal;

function LogOut() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = _ => {

        confirm({
            title: 'Do you Want To Log Out?',
            icon: <ExclamationCircleFilled style={{color: 'red'}} />,
            onOk() {
                // localStorage.removeItem('authrization')
                dispatch(removeToken());
                dispatch(removeUserData({}))
                navigate('/')
                // window.location.reload(false);
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '300px',
        }}>
            <h3>You're alredy logged in</h3>
            <Button type="primary" danger onClick={isLoggedIn} > <PoweroffOutlined />Log out</Button>
        </div>
    );
}

export default LogOut;
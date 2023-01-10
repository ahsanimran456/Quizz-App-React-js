import React from "react";
import { useState } from 'react';
import "../Screens/screen.css"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
function Slider({state}) {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={state}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Status : Active',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'Results',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'LogOut',
                            },
                        ]}
                    />
                </Sider>
                {/* <Layout className="site-layout">
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                </Layout> */}
            </Layout>
    );
}


export default Slider;
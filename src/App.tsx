import React, { useState } from 'react';
import {
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import {Link, Outlet} from "react-router-dom";
import className from "./App.module.less";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    disabled = true
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        disabled,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to="/">问卷</Link>, '1', <PieChartOutlined />, undefined, false),
    getItem('课程', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('用户', 'sub1', <UserOutlined />,),
    getItem('知识库', '9', <FileOutlined />),
];

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Link to="/">
                    <div className={className.logo}></div>
                </Link>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ background: colorBgContainer }} className={className.header}>
                    <span>
                        <span></span>
                        <UserOutlined style={{ fontSize: '24px' }} />
                    </span>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Outlet/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  A+ AI {new Date().getFullYear()} Created by ThoughtWorks
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;

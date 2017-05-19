
import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component {

    constructor(){
        super();
        this.state ={
            current:"top"
        }
    }


    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="./src/images/logo.png" alt="logo" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"></Icon>头条
                            </Menu.Item>
                            <Menu.Item key="caijin">
                                <Icon type="appstore"></Icon>财经
                            </Menu.Item>
                            <Menu.Item key="car">
                                <Icon type="appstore"></Icon>汽车
                            </Menu.Item>
                            <Menu.Item key="shuma">
                                <Icon type="appstore"></Icon>数码
                            </Menu.Item>
                            <Menu.Item key="junshi">
                                <Icon type="appstore"></Icon>军事
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"></Icon>社会
                            </Menu.Item>

                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}